import { configDotenv } from 'dotenv'
configDotenv();

import express, { json } from 'express'
import userRoutes from './routes/user.routes.js'
import { connectdb } from './Database/dbconnect.js';

const app = express()
connectdb();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  
  res.send('app was in home page endpoint  ') 
})

app.use('/user',userRoutes)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});