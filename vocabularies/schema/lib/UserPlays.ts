import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UserInteractionMixin } from './UserInteraction.js';

export interface UserPlays<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, rdfine.RdfResource<D> {
}

export function UserPlaysMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<UserPlays> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UserPlaysClass extends UserInteractionMixin(Resource) implements Partial<UserPlays> {
  }
  return UserPlaysClass
}

class UserPlaysImpl extends UserPlaysMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserPlays>) {
    super(arg, init)
    this.types.add(schema.UserPlays)
  }

  static readonly __mixins: Mixin[] = [UserPlaysMixin, UserInteractionMixin];
}
UserPlaysMixin.appliesTo = schema.UserPlays
UserPlaysMixin.Class = UserPlaysImpl

export const fromPointer = createFactory<UserPlays>([UserInteractionMixin, UserPlaysMixin], { types: [schema.UserPlays] });
