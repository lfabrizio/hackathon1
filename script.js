var googleSpreadsheet = require("google-spreadsheet");
var doc = new GoogleSpreadsheet('1DgHYi6ETHtqU7nkO25PSr_eGydu37LU6sSSR1et1pY8');





function getSpreadsheetData(sheetName) {
    // This function gives you an array of objects modeling a worksheet's tabular data, where the first items — column headers — become the property names.
    var arrayOfArrays = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName || 'Sheet1').getDataRange().getValues();
    var headers = arrayOfArrays.shift();
    return arrayOfArrays.map(function (row) {
      return row.reduce(function (memo, value, index) {
        if (value) {
          memo[headers[index]] = value;
        }
        return memo;
      }, {});
    });
  }

//////////////////////////////

function successFunc(data) {
    console.log(data);
  }
  


  var ss = SpreadsheetApp.getActiveSpreadsheet();

  ss.Sheetsu.read(
    "https://sheetsu.com/apis/v1.0lw/020b2c0f/",
    {},
    successFunc
  );





///////////////////


var Employee = {
    firstname: "NAME1",
    lastname: "LASTNAME1",
    idnumber: "employeeID",




}


function renderEmployeeInfo() {
    console.log("test");
    for (var i = 0; i < Employee.length; i++)
    document.getElementById("here").appendChild(h6).innerHTML = Employee[i].firstname;
}



