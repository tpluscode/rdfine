import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UserInteractionMixin } from './UserInteraction.js';

export interface UserLikes<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, rdfine.RdfResource<D> {
}

export function UserLikesMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<UserLikes & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UserLikesClass extends UserInteractionMixin(Resource) {
  }
  return UserLikesClass as any
}

class UserLikesImpl extends UserLikesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserLikes>) {
    super(arg, init)
    this.types.add(schema.UserLikes)
  }

  static readonly __mixins: Mixin[] = [UserLikesMixin, UserInteractionMixin];
}
UserLikesMixin.appliesTo = schema.UserLikes
UserLikesMixin.Class = UserLikesImpl

export const fromPointer = createFactory<UserLikes>([UserInteractionMixin, UserLikesMixin], { types: [schema.UserLikes] });
