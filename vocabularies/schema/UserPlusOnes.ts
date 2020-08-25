import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { UserInteractionMixin } from './UserInteraction';

export interface UserPlusOnes extends Schema.UserInteraction, RdfResource {
}

export function UserPlusOnesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserPlusOnesClass extends UserInteractionMixin(Resource) implements UserPlusOnes {
  }
  return UserPlusOnesClass
}

class UserPlusOnesImpl extends UserPlusOnesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserPlusOnes>) {
    super(arg, init)
    this.types.add(schema.UserPlusOnes)
  }

  static readonly __mixins: Mixin[] = [UserPlusOnesMixin, UserInteractionMixin];
}
UserPlusOnesMixin.appliesTo = schema.UserPlusOnes
UserPlusOnesMixin.Class = UserPlusOnesImpl
