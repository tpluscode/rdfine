import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface DeliveryEvent extends Schema.Event, RdfResource {
  accessCode: string;
  availableFrom: Date;
  availableThrough: Date;
  hasDeliveryMethod: Schema.DeliveryMethod;
}

export default function DeliveryEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeliveryEventClass extends EventMixin(Resource) implements DeliveryEvent {
    @property.literal()
    accessCode!: string;
    @property.literal()
    availableFrom!: Date;
    @property.literal()
    availableThrough!: Date;
    @property()
    hasDeliveryMethod!: Schema.DeliveryMethod;
  }
  return DeliveryEventClass
}

class DeliveryEventImpl extends DeliveryEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DeliveryEvent)
  }
}
DeliveryEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DeliveryEvent)
DeliveryEventMixin.Class = DeliveryEventImpl
