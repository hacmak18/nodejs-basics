const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serielized url
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain) return with porn number
console.log(myUrl.host);

//host name || does not return port number
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//params objects
console.log(myUrl.searchParams);
//Add param
myUrl.searchParams.append('abc','123');
//Loop through params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));