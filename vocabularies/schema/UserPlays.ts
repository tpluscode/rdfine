import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserPlays extends Schema.UserInteraction, RdfResource {
}

export default function UserPlaysMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserPlaysClass extends UserInteractionMixin(Resource) implements UserPlays {
  }
  return UserPlaysClass
}

class UserPlaysImpl extends UserPlaysMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UserPlays)
  }
}
UserPlaysMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserPlays)
UserPlaysMixin.Class = UserPlaysImpl
