import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Conversation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function ConversationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Conversation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ConversationClass extends CreativeWorkMixin(Resource) implements Partial<Conversation> {
  }
  return ConversationClass
}

class ConversationImpl extends ConversationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Conversation>) {
    super(arg, init)
    this.types.add(schema.Conversation)
  }

  static readonly __mixins: Mixin[] = [ConversationMixin, CreativeWorkMixin];
}
ConversationMixin.appliesTo = schema.Conversation
ConversationMixin.Class = ConversationImpl

export const fromPointer = createFactory<Conversation>([CreativeWorkMixin, ConversationMixin], { types: [schema.Conversation] });
