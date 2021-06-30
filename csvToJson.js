var fs = require("fs");

function csvToJson(csv_string){
    csv_string = csv_string + "";

    const rows = csv_string.split('\r\n');

    const header = rows[0].split(',');

    const jsonArray = {};
    for(let i = 1; i < rows.length; i++){
        let obj = {};
        let row = rows[i].split(",");
        for(let j = 1; j < header.length ; j++){
            console.log(header[j]);
            obj[header[j]] = row[j];
        }
        jsonArray[row[0]] = obj;
    }

    return jsonArray;
}

const file_csv = fs.readFileSync('fooddatas.csv');
const string_csv = file_csv.toString();
const arr_json = csvToJson(string_csv);
const string_json = JSON.stringify(arr_json);
fs.writeFileSync('FoodDatas.json', string_json);