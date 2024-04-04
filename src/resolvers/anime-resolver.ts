import { supabase } from "../supabase";

export const resolver = async (parent: any, args: { title?: string, english_title?: string, native_title?: string, spanish_title?: string, id?: number }) => {
    const { title, english_title, native_title, spanish_title, id } = args;

    const base = supabase.from("anime").select("*").limit(10);
    let res;

    if (id) {
        res = base.eq("id", id);
    } else if (title) {
        res = base.ilike("title", `%${title}%`);
    } else if (english_title) {
        res = base.ilike("en_title", `%${english_title}%`);
    } else if (native_title) {
        res = base.ilike("jp_title", `%${native_title}%`);
    } else if (spanish_title) {
        res = base.ilike("es_title", `%${spanish_title}%`);
    } else {
        res = base;
    }

    const data = (await res).data;

    if (!data) return null;

    const mutatedData = data.map(async (anime) => {

        const characters = await supabase.from("rel_anime-character").select("*").eq("anime_id", anime.id);
        const charactersData = characters.data;

        return {
            ...anime,
            characters: charactersData && charactersData.map((character) => character.character_id)
        }

    });

    return mutatedData;

}