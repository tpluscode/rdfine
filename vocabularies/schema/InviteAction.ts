import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface InviteAction extends Schema.CommunicateAction, RdfResource {
  event: Schema.Event;
}

export default function InviteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InviteActionClass extends CommunicateActionMixin(Resource) implements InviteAction {
    @property.resource()
    event!: Schema.Event;
  }
  return InviteActionClass
}

class InviteActionImpl extends InviteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<InviteAction>) {
    super(arg)
    this.types.add(schema.InviteAction)
    initializeProperties(this, init)
  }
}
InviteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InviteAction)
InviteActionMixin.Class = InviteActionImpl
