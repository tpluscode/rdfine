import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<EmailMessage>) {
    super(arg, init)
    this.types.add(schema.EmailMessage)
  }
}
EmailMessageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmailMessage)
EmailMessageMixin.Class = EmailMessageImpl
