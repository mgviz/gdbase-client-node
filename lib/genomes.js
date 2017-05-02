//Import dependencies
var request = require('request');
var url = require('url');

//Get the genomes information
var genomes = function(url_path)
{
  //Save the gdbase url path
  this._url = url.resolve(url_path, '/genomes');

  //Return this
  return this;
};

//Do the genomes request
genomes.prototype.end = function(cb)
{
  //Initialize the request object
  var obj = { url: this._url, json: true, followRedirect: true, followAllRedirects: true, rejectUnauthorized: false };

  //Do the request
  return request.get(obj, function(error, response, body)
  {
    //Check the error
    if(error){ return cb(error, null); }

    //Check the response status code
    if(response.statusCode >= 300)
    {
      //Do the callback with the error object
      return cb(new Error(response.statusMessage), null);
    }

    //Do the callback with the genomes list
    return cb(null, body);
  });
};

//Exports to node
module.exports = genomes;
