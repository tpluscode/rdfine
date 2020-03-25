import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserPageVisits extends Schema.UserInteraction, RdfResource {
}

export default function UserPageVisitsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserPageVisitsClass extends UserInteractionMixin(Resource) implements UserPageVisits {
  }
  return UserPageVisitsClass
}

class UserPageVisitsImpl extends UserPageVisitsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserPageVisits>) {
    super(arg, init)
    this.types.add(schema.UserPageVisits)
  }
}
UserPageVisitsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserPageVisits)
UserPageVisitsMixin.Class = UserPageVisitsImpl
