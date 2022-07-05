import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import JSONData from './breweries_la.json' assert { type: 'json' };

const app = express();
const PORT = process.env.PORT;
const data = JSONData;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get('/', (request, response) => {
  response.json(data);
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
