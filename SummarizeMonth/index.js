const AzureUpdateService = require("../services/AzureUpdateService");
const ViewBuilderService = require("../services/ViewBuilderService");

module.exports = async function (context, req) {

    const year = req.query.year || new Date().getFullYear();
    const month = req.query.month || new Date().getMonth() + 1;

    var updates = await AzureUpdateService.getMonthUpdates(year, month);
    var html = ViewBuilderService.getView(updates);

    context.res = {
        status: 200,
        body: html,
        headers: {
            "Content-Type": "text/html"
        }
    };
}