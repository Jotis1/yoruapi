import { supabase } from "../supabase";

export const resolver = async (parent: any, args: { name?: string, id?: number }) => {
    const { name, id } = args;

    const base = supabase.from("character").select("*").limit(10);
    let res;

    if (id) {
        res = base.eq("id", id);
    } else if (name) {
        res = base.ilike("name", `%${name}%`);
    } else {
        res = base;
    }

    const data = (await res).data;

    if (!data) return null;

    const mutatedData = data.map(async (character) => {

        const anime = await supabase.from("rel_anime-character").select("*").eq("character_id", character.id);
        const animeData = anime.data;

        return {
            ...character,
            animes: animeData && animeData.map((anime) => anime.anime_id)
        }

    });

    return mutatedData;
}