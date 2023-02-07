import app from './app';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose
  .set('strictQuery', false)
  //@ts-ignore
  .connect(
    'mongodb+srv://phatphamm01:.Phatphamm01@cluster0.reyxgu7.mongodb.net/web-builder',
    {}
  )
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Error connecting to database', error);
  });

const port = 5001;

app.listen(port, () => {
  console.log(`Our server is running on port http://localhost:${port}`);
});
