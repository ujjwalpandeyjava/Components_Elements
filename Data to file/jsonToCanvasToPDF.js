function Export() {
    //  JSON string.
    let encounterJSON = `[["Customer Id","Name","Country"],[1,"John Hammond","United States"],[2,"Mudassar Khan","India"],[3,"Suzanne Mathews","France"],[4,"Robert Schidner","Russia"]]`;

    //Convert JSON string to JSON object.
    var customers = eval(encounterJSON);

    //Convert JSON to HTML Table.
    var table = document.createElement("TABLE");
    table.border = "1";
    table.Id = "tblCustomers";

    //Add the header row.
    let row = table.insertRow(-1);  // -1 to add at the end
    for (let i = 0; i < customers[0].length; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows
    for (let i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);  // Row in Table
        for (let j = 0; j < customers[0].length; j++) {
            let cell = row.insertCell(-1);  // Cell in row
            cell.innerHTML = customers[i][j];   // Data in cell
        }
    }

    //Append the Table to the HTML DIV.
    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);


    //Convert Table to PDF.
    html2canvas(document.getElementById('FullAreaForPDF'), {
        onrendered: function (canvas) {
            console.log(canvas);
            let data = canvas.toDataURL();
            let docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("JSON.pdf");

            //Remove the Table.
            // dvTable.innerHTML = "";
        }
    });
}