import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserTweets extends Schema.UserInteraction, RdfResource {
}

export default function UserTweetsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserTweetsClass extends UserInteractionMixin(Resource) implements UserTweets {
  }
  return UserTweetsClass
}

class UserTweetsImpl extends UserTweetsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserTweets>) {
    super(arg, init)
    this.types.add(schema.UserTweets)
  }
}
UserTweetsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserTweets)
UserTweetsMixin.Class = UserTweetsImpl
