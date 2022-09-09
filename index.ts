import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './src/app';

dotenv.config();

mongoose
  //@ts-ignore
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Error connecting to database');
  });

const port = 5000;

app.listen(port, () => {
  console.log(`Our server is running on port http://localhost:${port}`);
});
