import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get('/', (request, response) => {
  response.send('API is running');
});

app.listen(PORT, () => {
  console.log(`your server is running on PORT ${PORT}`);
});
