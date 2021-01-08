module.exports = {

    getView(updates) {
        let updateHtmls = "";
        for (var update of updates) {
            updateHtmls += this.getItemView(update);
        }
        let html = `
        <div>
            ${this.getStyles()}
            <div class="container">
            <h1>Azure Updates - Month Summarization</h1>
            <table class="table">
                ${updateHtmls}
            </table>
        </div>`
        return html;
    },

    getItemView(update) {
        return `<tr>
            <td width="100px">${update.date.getFullYear()}/${update.date.getMonth()+1}/${update.date.getDate()}</td>
            <td><a href="${update.link}" target="_blank">${update.title}</a></td>
            <td>${update.description}</td>
        </tr>`;
    },


    getStyles() {
        return ` <style>
        .container {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin: 0 auto;
            max-width: 80%;
        }

        table {
            margin: 0 auto;
            width: 100%;
        }

        table.table {
            border: 1px solid #1C6EA4;
            background-color: #EEEEEE;
            width: 100%;
            text-align: left;
            border-collapse: collapse;
        }
        table.table td,
        table.table th {
            border: 1px solid #AAAAAA;
            padding: 10px;
        }

        table.table tbody td {
            font-size: 13px;
        }

        table.table tr:nth-child(even) {
            background: #D0E4F5;
        }

        table.table thead {
            background: #1C6EA4;
            background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
            background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
            background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
            border-bottom: 2px solid #444444;
        }

        table.table thead th {
            font-size: 15px;
            font-weight: bold;
            color: #FFFFFF;
            border-left: 2px solid #D0E4F5;
        }

        table.table thead th:first-child {
            border-left: none;
        }

        table.table tfoot {
            font-size: 14px;
            font-weight: bold;
            color: #FFFFFF;
            background: #D0E4F5;
            background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
            background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
            background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
            border-top: 2px solid #444444;
        }

        table.table tfoot td {
            font-size: 14px;
        }

        table.table tfoot .links {
            text-align: right;
        }

        table.table tfoot .links a {
            display: inline-block;
            background: #1C6EA4;
            color: #FFFFFF;
            padding: 2px 8px;
            border-radius: 5px;
        }
    </style>`
    }
}