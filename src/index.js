import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import Promise from 'bluebird'
import saveDataInDb from './saveDataInDb';
import Pet from './models/Pet';
import User from './models/User';

mongoose.Promise = Promise;
//mongoose.connect('mongodb://publicdb.mgbeta.ru/isuvorov_skb3');

const app = express();
app.use(cors());

app.get('/users', async (req,res) => {
  const users = await User.find();
  return res.json(users);

});

app.get('/pets',async (req,res) => {
  const pets = await Pet.find();
  return res.json(pets);
});

app.post('/data', (req,res) => {
  const data = req.body;


  saveDataInDb(data);
});


/*const data = {
  user: {
    name: 'isuvorov',
  },
  pets:[
    {
      name:'ghhg',
      type:'cat',
    },
    {
      name:'Done',
      type:'dog'
    },
  ],
};


const Pet = mongoose.model('Pet',{
  type: String,
  name:String,
});





var kitty = new Pet({
   name: 'Zildjian',
   type: 'cat',
});
kitty.save().then(() => {
  console.log('success');
}).catch(() => {
  console.log('err',err);
})


  }
});
*/



app.listen(3000, function () {
 console.log('.!.');
})
