import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<UserLikes>) {
    super(arg)
    this.types.add(schema.UserLikes)
    initializeProperties<UserLikes>(this, init)
  }
}
UserLikesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserLikes)
UserLikesMixin.Class = UserLikesImpl
