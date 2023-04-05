import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface DeliveryEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
  accessCode: string | undefined;
  availableFrom: Date | undefined;
  availableThrough: Date | undefined;
  hasDeliveryMethod: Schema.DeliveryMethod | undefined;
}

export function DeliveryEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DeliveryEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class DeliveryEventClass extends EventMixin(Resource) implements Partial<DeliveryEvent> {
    @property.literal()
    accessCode: string | undefined;
    @property.literal({ type: Date })
    availableFrom: Date | undefined;
    @property.literal({ type: Date })
    availableThrough: Date | undefined;
    @property()
    hasDeliveryMethod: Schema.DeliveryMethod | undefined;
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

export const fromPointer = createFactory<DeliveryEvent>([EventMixin, DeliveryEventMixin], { types: [schema.DeliveryEvent] });
