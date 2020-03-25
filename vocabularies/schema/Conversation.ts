import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Conversation extends Schema.CreativeWork, RdfResource {
}

export default function ConversationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ConversationClass extends CreativeWorkMixin(Resource) implements Conversation {
  }
  return ConversationClass
}

class ConversationImpl extends ConversationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Conversation>) {
    super(arg, init)
    this.types.add(schema.Conversation)
  }
}
ConversationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Conversation)
ConversationMixin.Class = ConversationImpl
