import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<EmailMessage>) {
    super(arg)
    this.types.add(schema.EmailMessage)
    initializeProperties(this, init)
  }
}
EmailMessageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmailMessage)
EmailMessageMixin.Class = EmailMessageImpl
