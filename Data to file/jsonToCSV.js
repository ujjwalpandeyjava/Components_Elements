function sampleCSV() {
    let fileTitle = 'orders';
    let dataHeader = {
        model: 'Phone Model'.replace(/,/g, ''), // remove commas to avoid errors
        chargers: "Chargers",
        cases: "Cases",
        earphones: "Earphones"
    };
    let rawData = [
        {
            model: 'Samsung S7',
            chargers: '55',
            cases: '56',
            earphones: '57',
            scratched: '2'
        },
        {
            model: 'Pixel XL',
            chargers: '77',
            cases: '78',
            earphones: '79',
            scratched: '4'
        },
        {
            model: 'iPhone 7',
            chargers: '88',
            cases: '89',
            earphones: '90',
            scratched: '6'
        }
    ];

    let formattedData = [];
    rawData.forEach((item, index) => {
        formattedData.push({
            model: item.model.replace(/,/g, ''), // remove commas to avoid errors,
            chargers: item.chargers,
            cases: item.cases,
            earphones: item.earphones
        });
    });

    exportCSVFile(dataHeader, formattedData, fileTitle);
}

function exportCSVFile(header, items, fileTitle) {
    if (header) items.unshift(header);

    let exportedFileName = fileTitle + '.csv' || 'export.csv';
    var blob = new Blob([this.convertToCSV(JSON.stringify(items))], { type: 'text/csv;charset=utf-8;' });

    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFileName);
    } else {
        let downloadElement = document.createElement("a");
        if (downloadElement.download !== undefined) {
            let url = URL.createObjectURL(blob);
            downloadElement.setAttribute("href", url);
            downloadElement.setAttribute("download", exportedFileName);
            downloadElement.style.visibility = 'hidden';
            document.body.appendChild(downloadElement);
            downloadElement.click();
            document.body.removeChild(downloadElement);
        }
    }
}

function convertToCSV(dataRowObjects) {
    let array = typeof dataRowObjects != 'object' ? JSON.parse(dataRowObjects) : dataRowObjects;
    let str = '';
    for (let i = 0; i < array.length; i++) {
        let line = '';
        for (let index in array[i]) {
            if (line != '') line += ','
            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}