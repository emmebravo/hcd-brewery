import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import JSONData from './breweries_la.json' assert { type: 'json' };

const app = express();
const PORT = process.env.PORT || 5000;
const data = JSONData;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get('/', (request, response) => {
  response.json(data);
});

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  //if it hits anything other than the route path
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
