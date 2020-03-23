import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UserInteraction)
  }
}
UserInteractionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserInteraction)
UserInteractionMixin.Class = UserInteractionImpl
