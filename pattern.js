//Email Pattern
const email = 'istiak01@gmail.com';
const epattern = /^[a-z0-9_.]*@[a-z]*\.[a-z]*$/;
console.log(epattern.test(email));

//Username Pattern
const username = 'istiak_82';
const upattern = /^[a-zA-Z0-9-_.]*$/;
console.log(upattern.test(username));

// Bangladeshi Phone Number pattern
const phonenumber = '01940362753';
const pnpattern = /^(\+8801|0088|01)[0-9]{9}$/;
console.log(pnpattern.test(phonenumber));


//Password Pattern 
const password = 'Istiak@#-+1231';
const ppattern = /^[a-zA-Z0-9 \~\!\@\#\$\%\^\&\*\(\)\_\-\=\+]*$/;
console.log(ppattern.test(password));

//ZipCode Pattern
const zipcode = '3500';
const zippattern = /^[0-9]{4}$/;
console.log(zippattern.test(zipcode));
