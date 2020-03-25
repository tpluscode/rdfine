import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface UserInteraction extends Schema.Event, RdfResource {
}

export default function UserInteractionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserInteractionClass extends EventMixin(Resource) implements UserInteraction {
  }
  return UserInteractionClass
}

class UserInteractionImpl extends UserInteractionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserInteraction>) {
    super(arg, init)
    this.types.add(schema.UserInteraction)
  }
}
UserInteractionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserInteraction)
UserInteractionMixin.Class = UserInteractionImpl
