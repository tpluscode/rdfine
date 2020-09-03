import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface DeliveryEvent extends Schema.Event, RdfResource {
  accessCode: string;
  availableFrom: Date;
  availableThrough: Date;
  hasDeliveryMethod: Schema.DeliveryMethod;
}

export function DeliveryEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeliveryEventClass extends EventMixin(Resource) implements DeliveryEvent {
    @property.literal()
    accessCode!: string;
    @property.literal({ type: Date })
    availableFrom!: Date;
    @property.literal({ type: Date })
    availableThrough!: Date;
    @property()
    hasDeliveryMethod!: Schema.DeliveryMethod;
  }
  return DeliveryEventClass
}

class DeliveryEventImpl extends DeliveryEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeliveryEvent>) {
    super(arg, init)
    this.types.add(schema.DeliveryEvent)
  }

  static readonly __mixins: Mixin[] = [DeliveryEventMixin, EventMixin];
}
DeliveryEventMixin.appliesTo = schema.DeliveryEvent
DeliveryEventMixin.Class = DeliveryEventImpl
