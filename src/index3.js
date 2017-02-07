import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function canonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?((github|twitter|www|telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)','i');
  const username = url.match(re)[5];
  return '@' + username;
}

app.get('/task2C',function (req,res) {
  const username = canonize(req.query.username);
  return res.send(username);
});



app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
