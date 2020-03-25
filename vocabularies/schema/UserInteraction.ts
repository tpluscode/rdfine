import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<UserInteraction>) {
    super(arg)
    this.types.add(schema.UserInteraction)
    initializeProperties<UserInteraction>(this, init)
  }
}
UserInteractionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserInteraction)
UserInteractionMixin.Class = UserInteractionImpl
