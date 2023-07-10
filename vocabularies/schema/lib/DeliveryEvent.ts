import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface DeliveryEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
  accessCode: string | undefined;
  availableFrom: Date | undefined;
  availableThrough: Date | undefined;
  hasDeliveryMethod: Schema.DeliveryMethod | undefined;
}

export function DeliveryEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DeliveryEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DeliveryEventClass extends EventMixin(Resource) {
    @rdfine.property.literal()
    accessCode: string | undefined;
    @rdfine.property.literal({ type: Date })
    availableFrom: Date | undefined;
    @rdfine.property.literal({ type: Date })
    availableThrough: Date | undefined;
    @rdfine.property()
    hasDeliveryMethod: Schema.DeliveryMethod | undefined;
  }
  return DeliveryEventClass as any
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

export const fromPointer = createFactory<DeliveryEvent>([EventMixin, DeliveryEventMixin], { types: [schema.DeliveryEvent] });
