import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UserInteractionMixin } from './UserInteraction.js';

export interface UserTweets<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, rdfine.RdfResource<D> {
}

export function UserTweetsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<UserTweets & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UserTweetsClass extends UserInteractionMixin(Resource) {
  }
  return UserTweetsClass as any
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

export const fromPointer = createFactory<UserTweets>([UserInteractionMixin, UserTweetsMixin], { types: [schema.UserTweets] });
