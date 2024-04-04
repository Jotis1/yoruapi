export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            anime: {
                Row: {
                    en_desc: string | null
                    en_title: string | null
                    end_date: string | null
                    episode_duration: number | null
                    episodes: number | null
                    es_desc: string | null
                    es_title: string | null
                    format: Database["public"]["Enums"]["format"] | null
                    hashtag: string | null
                    id: number
                    jp_desc: string | null
                    jp_title: string | null
                    season: Database["public"]["Enums"]["season"] | null
                    source: Database["public"]["Enums"]["source"] | null
                    start_date: string | null
                    status: Database["public"]["Enums"]["status"] | null
                    synonyms: string[] | null
                    title: string | null
                }
                Insert: {
                    en_desc?: string | null
                    en_title?: string | null
                    end_date?: string | null
                    episode_duration?: number | null
                    episodes?: number | null
                    es_desc?: string | null
                    es_title?: string | null
                    format?: Database["public"]["Enums"]["format"] | null
                    hashtag?: string | null
                    id?: number
                    jp_desc?: string | null
                    jp_title?: string | null
                    season?: Database["public"]["Enums"]["season"] | null
                    source?: Database["public"]["Enums"]["source"] | null
                    start_date?: string | null
                    status?: Database["public"]["Enums"]["status"] | null
                    synonyms?: string[] | null
                    title?: string | null
                }
                Update: {
                    en_desc?: string | null
                    en_title?: string | null
                    end_date?: string | null
                    episode_duration?: number | null
                    episodes?: number | null
                    es_desc?: string | null
                    es_title?: string | null
                    format?: Database["public"]["Enums"]["format"] | null
                    hashtag?: string | null
                    id?: number
                    jp_desc?: string | null
                    jp_title?: string | null
                    season?: Database["public"]["Enums"]["season"] | null
                    source?: Database["public"]["Enums"]["source"] | null
                    start_date?: string | null
                    status?: Database["public"]["Enums"]["status"] | null
                    synonyms?: string[] | null
                    title?: string | null
                }
                Relationships: []
            }
            character: {
                Row: {
                    aka: string[] | null
                    birthdate: string | null
                    en_about: string | null
                    es_about: string | null
                    gender: Database["public"]["Enums"]["gender"] | null
                    id: number
                    images: string[] | null
                    jp_about: string | null
                    jp_name: string | null
                    name: string
                }
                Insert: {
                    aka?: string[] | null
                    birthdate?: string | null
                    en_about?: string | null
                    es_about?: string | null
                    gender?: Database["public"]["Enums"]["gender"] | null
                    id?: number
                    images?: string[] | null
                    jp_about?: string | null
                    jp_name?: string | null
                    name: string
                }
                Update: {
                    aka?: string[] | null
                    birthdate?: string | null
                    en_about?: string | null
                    es_about?: string | null
                    gender?: Database["public"]["Enums"]["gender"] | null
                    id?: number
                    images?: string[] | null
                    jp_about?: string | null
                    jp_name?: string | null
                    name?: string
                }
                Relationships: []
            }
            "rel_anime-character": {
                Row: {
                    anime_id: number
                    character_id: number
                }
                Insert: {
                    anime_id: number
                    character_id: number
                }
                Update: {
                    anime_id?: number
                    character_id?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "public_rel_anime-character_anime_id_fkey"
                        columns: ["anime_id"]
                        isOneToOne: false
                        referencedRelation: "anime"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_rel_anime-character_character_id_fkey"
                        columns: ["character_id"]
                        isOneToOne: false
                        referencedRelation: "character"
                        referencedColumns: ["id"]
                    },
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            format:
            | "TV"
            | "TV_SHORT"
            | "MOVIE"
            | "SPECIAL"
            | "OVA"
            | "ONA"
            | "MUSIC"
            | "MANGA"
            | "NOVEL"
            gender: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN"
            season: "SPRING" | "SUMMER" | "FALL" | "WINTER"
            source:
            | "ORIGINAL"
            | "MANGA"
            | "LIGHT_NOVEL"
            | "VISUAL_NOVEL"
            | "VIDEO_GAME"
            | "OTHER"
            status:
            | "AIRING"
            | "FINISHED"
            | "NOT_YET_RELEASED"
            | "CANCELLED"
            | "HIATUS"
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
    ? R
    : never
    : never

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
    }
    ? I
    : never
    : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
    }
    ? U
    : never
    : never

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never