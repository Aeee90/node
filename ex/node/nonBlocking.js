const fs = require("fs");

fs.readFile('input.txt', function (err, data)
{
  if(err) return cosnole.error(err);
  console.log(data.toString());
});

console.log("Program has ended.");
