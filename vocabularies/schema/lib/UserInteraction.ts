import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface UserInteraction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function UserInteractionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserInteraction> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserInteractionClass extends EventMixin(Resource) implements Partial<UserInteraction> {
  }
  return UserInteractionClass
}

class UserInteractionImpl extends UserInteractionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserInteraction>) {
    super(arg, init)
    this.types.add(schema.UserInteraction)
  }

  static readonly __mixins: Mixin[] = [UserInteractionMixin, EventMixin];
}
UserInteractionMixin.appliesTo = schema.UserInteraction
UserInteractionMixin.Class = UserInteractionImpl

export const fromPointer = createFactory<UserInteraction>([EventMixin, UserInteractionMixin], { types: [schema.UserInteraction] });
