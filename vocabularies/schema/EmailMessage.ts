import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import MessageMixin from './Message';

export interface EmailMessage extends Schema.Message, RdfResource {
}

export default function EmailMessageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmailMessageClass extends MessageMixin(Resource) implements EmailMessage {
  }
  return EmailMessageClass
}

class EmailMessageImpl extends EmailMessageMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EmailMessage)
  }
}
EmailMessageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmailMessage)
EmailMessageMixin.Class = EmailMessageImpl
