
export const schema = `#graphql
enum source {
    ORIGINAL
    MANGA
    LIGHT_NOVEL
    VISUAL_NOVEL
    VIDEO_GAME
    OTHER
}

enum format {
    TV
    TV_SHORT
    MOVIE
    SPECIAL
    OVA
    ONA
    MUSIC
    MANGA
    NOVEL
    ONE_SHOT
}

enum status {
    AIRING
    FINISHED
    NOT_YET_RELEASED
    CANCELLED
    HIATUS
}

enum season {
    WINTER
    SPRING
    SUMMER
    FALL
}

enum gender {
    MALE
    FEMALE
    OTHER
    UNKNOWN
}

`