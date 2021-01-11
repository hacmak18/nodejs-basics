const fs = require('fs');
const path = require('path')

//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
    if (err) throw err;
    console.log('folder created');
});

//create and write file 
//write file overwrite the file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
    if (err) throw err;
    console.log('File written to...');

    //append file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
        if (err) throw err;
        console.log('File written to...')
    });
});


//Read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

//Rename file
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),
err=>{
    if(err) throw err;
    console.log('file renamed...');
});