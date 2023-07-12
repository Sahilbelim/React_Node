// rename file using file rename methode
var fs = require('fs');
fs.rename('banana.txt', 'pinaaple.txt', function (error)
{
    if (error)
        console.log(error);
    else
        console.log("file rename successfully ");
})