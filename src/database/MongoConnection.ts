import mongoose from 'mongoose';

const mongoURL = process.env.MONGO_CONNECTION || '';

class MongoConnection {
  constructor() {}

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(mongoURL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      });

      console.log('🎲 Database connected');
    } catch (err: any) {
      console.error(err.message);
      process.exit(1);
    }
  }
}

export { MongoConnection };
