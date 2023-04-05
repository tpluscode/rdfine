import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserLikes<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, RdfResource<D> {
}

export function UserLikesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserLikes> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserLikesClass extends UserInteractionMixin(Resource) implements Partial<UserLikes> {
  }
  return UserLikesClass
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
