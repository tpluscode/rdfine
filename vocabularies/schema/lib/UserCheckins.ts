import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UserInteractionMixin } from './UserInteraction.js';

export interface UserCheckins<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, rdfine.RdfResource<D> {
}

export function UserCheckinsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<UserCheckins> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UserCheckinsClass extends UserInteractionMixin(Resource) implements Partial<UserCheckins> {
  }
  return UserCheckinsClass
}

class UserCheckinsImpl extends UserCheckinsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserCheckins>) {
    super(arg, init)
    this.types.add(schema.UserCheckins)
  }

  static readonly __mixins: Mixin[] = [UserCheckinsMixin, UserInteractionMixin];
}
UserCheckinsMixin.appliesTo = schema.UserCheckins
UserCheckinsMixin.Class = UserCheckinsImpl

export const fromPointer = createFactory<UserCheckins>([UserInteractionMixin, UserCheckinsMixin], { types: [schema.UserCheckins] });
