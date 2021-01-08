const
    axios = require("axios"),
    parser = require('fast-xml-parser');

const AZURE_UPDATES_URL = "https://azure.microsoft.com/en-us/updates/feed/"

module.exports = {

    async getMonthUpdates(year, month) {
        let url = `${AZURE_UPDATES_URL}`;
        let response = await axios.get(url)
        let jsonResponse = parser.parse(response.data);

        let updates = jsonResponse.rss.channel.item
            .filter(item => {
                var date = new Date(item.pubDate);
                return (date.getFullYear() == year) && (date.getMonth() + 1 == month);
            })
            .map(item => {
                return {
                    title: item.title,
                    link: item.link,
                    date: new Date(item.pubDate),
                    description: item.description
                }
            })
        return updates;
    }
}