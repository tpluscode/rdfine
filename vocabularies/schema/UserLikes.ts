import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { UserInteractionMixin } from './UserInteraction';

export interface UserLikes extends Schema.UserInteraction, RdfResource {
}

export function UserLikesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserLikesClass extends UserInteractionMixin(Resource) implements UserLikes {
  }
  return UserLikesClass
}

class UserLikesImpl extends UserLikesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserLikes>) {
    super(arg, init)
    this.types.add(schema.UserLikes)
  }
}
UserLikesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserLikes)
UserLikesMixin.Class = UserLikesImpl
