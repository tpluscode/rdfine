import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Message extends Schema.CreativeWork, RdfResource {
  bccRecipient: Schema.ContactPoint | Schema.Organization | Schema.Person;
  ccRecipient: Schema.ContactPoint | Schema.Organization | Schema.Person;
  dateRead: Date | Date;
  dateReceived: Date;
  dateSent: Date;
  messageAttachment: Schema.CreativeWork;
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  sender: Schema.Audience | Schema.Organization | Schema.Person;
  toRecipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export default function MessageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MessageClass extends CreativeWorkMixin(Resource) implements Message {
    @property.resource()
    bccRecipient!: Schema.ContactPoint | Schema.Organization | Schema.Person;
    @property.resource()
    ccRecipient!: Schema.ContactPoint | Schema.Organization | Schema.Person;
    @property.literal()
    dateRead!: Date | Date;
    @property.literal()
    dateReceived!: Date;
    @property.literal()
    dateSent!: Date;
    @property.resource()
    messageAttachment!: Schema.CreativeWork;
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
    @property.resource()
    sender!: Schema.Audience | Schema.Organization | Schema.Person;
    @property.resource()
    toRecipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return MessageClass
}

class MessageImpl extends MessageMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Message)
  }
}
MessageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Message)
MessageMixin.Class = MessageImpl
