import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserLikes extends Schema.UserInteraction, RdfResource {
}

export default function UserLikesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserLikesClass extends UserInteractionMixin(Resource) implements UserLikes {
  }
  return UserLikesClass
}

class UserLikesImpl extends UserLikesMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UserLikes)
  }
}
UserLikesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserLikes)
UserLikesMixin.Class = UserLikesImpl
