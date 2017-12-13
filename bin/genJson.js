var fs = require('fs');
var path = '../www/static/';

function genDir(dir) {
    let ret = {};
    fs.stat(dir, (err, stats) => {

        if(stats.isFile()){
            ret
        }
        files.forEach( file => {
            console.log(file); 
        });
    });
    return ret;
}
genDir(path);