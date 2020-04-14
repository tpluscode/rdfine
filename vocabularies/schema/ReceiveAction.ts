import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ReceiveAction>) {
    super(arg, init)
    this.types.add(schema.ReceiveAction)
  }
}
ReceiveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReceiveAction)
ReceiveActionMixin.Class = ReceiveActionImpl
