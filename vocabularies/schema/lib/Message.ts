import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Message<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  bccRecipient: Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
  ccRecipient: Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
  dateRead: Date | undefined;
  dateReceived: Date | undefined;
  dateSent: Date | undefined;
  messageAttachment: Schema.CreativeWork<D> | undefined;
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
  sender: Schema.Audience<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
  toRecipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function MessageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Message> & RdfResourceCore> & Base {
  @namespace(schema)
  class MessageClass extends CreativeWorkMixin(Resource) implements Partial<Message> {
    @property.resource()
    bccRecipient: Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
    @property.resource()
    ccRecipient: Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateRead: Date | undefined;
    @property.literal({ type: Date })
    dateReceived: Date | undefined;
    @property.literal({ type: Date })
    dateSent: Date | undefined;
    @property.resource()
    messageAttachment: Schema.CreativeWork | undefined;
    @property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
    @property.resource()
    sender: Schema.Audience | Schema.Organization | Schema.Person | undefined;
    @property.resource()
    toRecipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return MessageClass
}

class MessageImpl extends MessageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Message>) {
    super(arg, init)
    this.types.add(schema.Message)
  }

  static readonly __mixins: Mixin[] = [MessageMixin, CreativeWorkMixin];
}
MessageMixin.appliesTo = schema.Message
MessageMixin.Class = MessageImpl
