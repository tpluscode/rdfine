import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserCheckins<ID extends ResourceNode = ResourceNode> extends Schema.UserInteraction<ID>, RdfResource<ID> {
}

export function UserCheckinsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserCheckinsClass extends UserInteractionMixin(Resource) implements UserCheckins {
  }
  return UserCheckinsClass
}

class UserCheckinsImpl extends UserCheckinsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserCheckins>) {
    super(arg, init)
    this.types.add(schema.UserCheckins)
  }

  static readonly __mixins: Mixin[] = [UserCheckinsMixin, UserInteractionMixin];
}
UserCheckinsMixin.appliesTo = schema.UserCheckins
UserCheckinsMixin.Class = UserCheckinsImpl
