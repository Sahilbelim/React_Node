var fs = require('fs');
var buf = new Buffer(1024);
console.log("file start to open");
fs.open('apple.txt', 'r+', function (error,fd)
{

    if (error)
    {
        console.log(error);
    }
    else {
        console.log("fille open successfull");
        var startposition = 0;
        var noCharToRead = buf.length;
        var potionToReadinFile = 0;

        fs.read(fd, buf, startposition, noCharToRead, potionToReadinFile, function (err, noCharToFetch)
        {
            if (err)
            {
                console.log(err)
            }
            else
            {
                console.log("number od charecter fetch ", noCharToFetch);
                if (noCharToFetch > 0)
                {
                    console.log(buf.slice(0, noCharToFetch).toString());
                    }
                }
        });
        fs.close(fd, function (er)
        {   if(er)
            console.log(er)
        else
            console.log("file close successfull")
        })
        {

        }
    }
})