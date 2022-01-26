import { prop, getModelForClass } from '@typegoose/typegoose';

export class URL {
  @prop({ required: true })
  hash: string;

  @prop({ required: true })
  originURL: string;

  @prop({ required: true })
  shortURL: string;

  @prop({ required: true })
  createdAt: Date;
}

const URLModel = getModelForClass(URL);

export { URLModel };
