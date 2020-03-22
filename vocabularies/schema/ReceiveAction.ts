import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ReceiveAction)
  }
}
ReceiveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReceiveAction)
ReceiveActionMixin.Class = ReceiveActionImpl
