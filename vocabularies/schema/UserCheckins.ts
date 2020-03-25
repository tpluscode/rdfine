import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<UserCheckins>) {
    super(arg)
    this.types.add(schema.UserCheckins)
    initializeProperties<UserCheckins>(this, init)
  }
}
UserCheckinsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserCheckins)
UserCheckinsMixin.Class = UserCheckinsImpl
