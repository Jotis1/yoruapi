const url = "https://graphql.anilist.co";

const query = `#graphql
query ($page: Int) {
    Page (page: $page)  {
        pageInfo    {
                currentPage
                hasNextPage
        }
    media   {
            title   {
                romaji
                english
                native
                userPreferred
            }
            startDate   {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            episodes
            duration
            format
            hashtag
            synonyms
        }
    }
}
`

let i = 1;
let intervalId = setInterval(async () => { // Almacenamos el identificador del intervalo

    console.log("Fetching data from Anilist, page " + i);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: {
                $page: i
            }
        })
    }

    const response = await fetch(url, options).catch(console.error);

    const { data } = await response?.json();

    if (!data || !data.Page.pageInfo.hasNextPage) {
        console.log("No more data to fetch");
        clearInterval(intervalId); // Detenemos el intervalo cuando no hay más datos
        return;
    }

    console.log(data.Page.media);

    i++;

}, 1000);