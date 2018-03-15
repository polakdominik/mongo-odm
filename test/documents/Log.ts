import { BaseDocument } from '../../src/BaseDocument';
import { Document } from '../../src/Decorators/Document';
import { Property } from '../../src/Decorators/Property';
import { ObjectID } from 'bson';
import { User } from './User';

@Document({collectionName: 'log'})
export class Log extends BaseDocument {

  @Property()
  public _id: ObjectID;

  @Property()
  eventType: number;

  @Property()
  user: User | string;

}
