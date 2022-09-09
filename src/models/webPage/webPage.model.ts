import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const webPageSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    json: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('WebPage', webPageSchema);
