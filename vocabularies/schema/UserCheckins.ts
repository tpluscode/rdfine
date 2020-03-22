import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UserCheckins)
  }
}
UserCheckinsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserCheckins)
UserCheckinsMixin.Class = UserCheckinsImpl
