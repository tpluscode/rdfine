import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, ResourceIdentifier, DatasetType } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserTweets<ID extends ResourceNode = ResourceNode> extends Schema.UserInteraction<ID>, RdfResource<ID> {
}

export function UserTweetsMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [UserTweetsMixin, UserInteractionMixin];
}
UserTweetsMixin.appliesTo = schema.UserTweets
UserTweetsMixin.Class = UserTweetsImpl
