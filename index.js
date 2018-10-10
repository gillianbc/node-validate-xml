var validator = require('xsd-schema-validator');
var fs = require('fs');

var xmlStr = fs.readFileSync('./resources/Demo.xml').toString();
console.log(xmlStr);
var errorCount = 0;
var somefield = '';
function doVal(str,xsdfile){
  return new Promise(function(resolve,reject){
    validator.validateXML(str, xsdfile, function(err, result) {
       if (err){
         reject(err);
       } else {
         resolve(result);
       }
    });
  });
}


doVal(xmlStr,'resources/Demo.xsd')
.then((result)=>{
  console.log('All OK');
  somefield = 'A';
})
.catch((err) => {
  errorCount += 1;
  console.log('Error 2 ' + errorCount);
  somefield = 'N';
})
.then(() => {
  console.log('Somefield ' + somefield);
})


console.log('Error 1 ' + errorCount);