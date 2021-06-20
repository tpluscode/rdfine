import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Conversation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function ConversationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Conversation> & RdfResourceCore> & Base {
  @namespace(schema)
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
