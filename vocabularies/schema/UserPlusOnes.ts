import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
}
UserPlusOnesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserPlusOnes)
UserPlusOnesMixin.Class = UserPlusOnesImpl
