//Import dependencies
var gdbase = require('../index.js');

//Get the new genomes request
var genomes = new gdbase.genomes('http://localhost:5001');

//Do the request
genomes.end(function(error, list)
{
  //Display the results
  console.log('Error: ');
  console.log(error);
  console.log('Genomes: ');
  console.log(list);
});