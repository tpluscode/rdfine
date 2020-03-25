import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserCheckins extends Schema.UserInteraction, RdfResource {
}

export default function UserCheckinsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserCheckinsClass extends UserInteractionMixin(Resource) implements UserCheckins {
  }
  return UserCheckinsClass
}

class UserCheckinsImpl extends UserCheckinsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserCheckins>) {
    super(arg, init)
    this.types.add(schema.UserCheckins)
  }
}
UserCheckinsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserCheckins)
UserCheckinsMixin.Class = UserCheckinsImpl
