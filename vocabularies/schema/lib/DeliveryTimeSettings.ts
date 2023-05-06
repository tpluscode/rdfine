import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface DeliveryTimeSettings<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  deliveryTime: Schema.ShippingDeliveryTime<D> | undefined;
  isUnlabelledFallback: boolean | undefined;
  shippingDestination: Schema.DefinedRegion<D> | undefined;
  transitTimeLabel: string | undefined;
}

export function DeliveryTimeSettingsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DeliveryTimeSettings> & RdfResourceCore> & Base {
  @namespace(schema)
  class DeliveryTimeSettingsClass extends StructuredValueMixin(Resource) implements Partial<DeliveryTimeSettings> {
    @property.resource()
    deliveryTime: Schema.ShippingDeliveryTime | undefined;
    @property.literal({ type: Boolean })
    isUnlabelledFallback: boolean | undefined;
    @property.resource()
    shippingDestination: Schema.DefinedRegion | undefined;
    @property.literal()
    transitTimeLabel: string | undefined;
  }
  return DeliveryTimeSettingsClass
}

class DeliveryTimeSettingsImpl extends DeliveryTimeSettingsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeliveryTimeSettings>) {
    super(arg, init)
    this.types.add(schema.DeliveryTimeSettings)
  }

  static readonly __mixins: Mixin[] = [DeliveryTimeSettingsMixin, StructuredValueMixin];
}
DeliveryTimeSettingsMixin.appliesTo = schema.DeliveryTimeSettings
DeliveryTimeSettingsMixin.Class = DeliveryTimeSettingsImpl

export const fromPointer = createFactory<DeliveryTimeSettings>([StructuredValueMixin, DeliveryTimeSettingsMixin], { types: [schema.DeliveryTimeSettings] });
