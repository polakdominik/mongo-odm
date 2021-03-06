import { BaseDocument, Property, Collection, OneToOne } from '../../lib';
import { ObjectID } from 'bson';
import { User } from './User';

@Collection({collectionName: 'log'})
export class Log extends BaseDocument {

  @Property()
  public _id: ObjectID;

  @Property()
  eventType: number;

  @OneToOne({targetDocument: 'User'})
  user: User | string;

}
