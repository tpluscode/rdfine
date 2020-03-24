import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TransferActionMixin from './TransferAction';

export interface ReceiveAction extends Schema.TransferAction, RdfResource {
  deliveryMethod: Schema.DeliveryMethod;
  sender: Schema.Audience | Schema.Organization | Schema.Person;
}

export default function ReceiveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReceiveActionClass extends TransferActionMixin(Resource) implements ReceiveAction {
    @property()
    deliveryMethod!: Schema.DeliveryMethod;
    @property.resource()
    sender!: Schema.Audience | Schema.Organization | Schema.Person;
  }
  return ReceiveActionClass
}

class ReceiveActionImpl extends ReceiveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ReceiveAction>) {
    super(arg)
    this.types.add(schema.ReceiveAction)
    initializeProperties(this, init)
  }
}
ReceiveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReceiveAction)
ReceiveActionMixin.Class = ReceiveActionImpl
