import cors from 'cors';
import express from 'express';


const app = express();

app.use(cors());
app.use(express.static('public'))

const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () =>
  console.log(`Example app listening on port 3000!`),
);
