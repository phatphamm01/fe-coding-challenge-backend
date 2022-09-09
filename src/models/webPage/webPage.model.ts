import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const webPageSchema = new mongoose.Schema(
  {
    json: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model('WebPage', webPageSchema);
