// delete file using file unlink methode 
var fs = require('fs');
fs.unlink('./pinaaple.txt', function (error)
{
    if (error)
        console.log(error);
    else
        console.log('file delete successfully ');
})