import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, ResourceIdentifier, DatasetType } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserPlays<ID extends ResourceNode = ResourceNode> extends Schema.UserInteraction<ID>, RdfResource<ID> {
}

export function UserPlaysMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserPlaysClass extends UserInteractionMixin(Resource) implements UserPlays {
  }
  return UserPlaysClass
}

class UserPlaysImpl extends UserPlaysMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserPlays>) {
    super(arg, init)
    this.types.add(schema.UserPlays)
  }

  static readonly __mixins: Mixin[] = [UserPlaysMixin, UserInteractionMixin];
}
UserPlaysMixin.appliesTo = schema.UserPlays
UserPlaysMixin.Class = UserPlaysImpl
