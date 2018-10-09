var validator = require('xsd-schema-validator');
var fs = require('fs');

var xmlStr = fs.readFileSync('./resources/Demo.xml').toString();
console.log(xmlStr);

validator.validateXML(xmlStr, 'resources/Demo.xsd', function(err, result) {
  if (err) {
    console.log(err.message);
  }
  if (result.valid) {
    console.log("File is valid");
  } else {
    console.log("File is not valid");
  }
});