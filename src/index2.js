import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

 function canonize(fullName) {
   console.log(fullName.length);
   const localFullName = fullName.split(' ');
   const number = /(0)|(1)|(2)|(3)|(4)|(5)|(6)|(7)|(8)|(9)/.test(fullName);
   const defis = /(_)|(\/)/.test(fullName);

   if ( localFullName.length > 3  || fullName.length == 0 || number == true || defis == true) {
     return 'Invalid fullname';
   }
   if (localFullName.length == 1) {
       return localFullName[0];
   }
   if (localFullName.length == 2) {
     return localFullName[1]+ ' '+(localFullName[0].slice(0,1) + '.');
   }
   let array = (localFullName[2]) +' ' +(localFullName[0].slice(0,1) + '.') + ' '+(localFullName[1].slice(0,1) + '.');

  return array;
}

app.get('/task2B',function (req,res) {

  const fullName = canonize(req.query.fullname.toString());
  return res.send(fullName);
});

app.listen(3000, function () {
 console.log('.!.');
})
