import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface ShippingRateSettings<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  doesNotShip: boolean | undefined;
  freeShippingThreshold: Schema.DeliveryChargeSpecification<D> | Schema.MonetaryAmount<D> | undefined;
  isUnlabelledFallback: boolean | undefined;
  shippingDestination: Schema.DefinedRegion<D> | undefined;
  shippingLabel: string | undefined;
  shippingRate: Schema.MonetaryAmount<D> | undefined;
}

export function ShippingRateSettingsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ShippingRateSettings & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ShippingRateSettingsClass extends StructuredValueMixin(Resource) {
    @rdfine.property.literal({ type: Boolean })
    doesNotShip: boolean | undefined;
    @rdfine.property.resource()
    freeShippingThreshold: Schema.DeliveryChargeSpecification | Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ type: Boolean })
    isUnlabelledFallback: boolean | undefined;
    @rdfine.property.resource()
    shippingDestination: Schema.DefinedRegion | undefined;
    @rdfine.property.literal()
    shippingLabel: string | undefined;
    @rdfine.property.resource()
    shippingRate: Schema.MonetaryAmount | undefined;
  }
  return ShippingRateSettingsClass as any
}

class ShippingRateSettingsImpl extends ShippingRateSettingsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShippingRateSettings>) {
    super(arg, init)
    this.types.add(schema.ShippingRateSettings)
  }

  static readonly __mixins: Mixin[] = [ShippingRateSettingsMixin, StructuredValueMixin];
}
ShippingRateSettingsMixin.appliesTo = schema.ShippingRateSettings
ShippingRateSettingsMixin.Class = ShippingRateSettingsImpl

export const fromPointer = createFactory<ShippingRateSettings>([StructuredValueMixin, ShippingRateSettingsMixin], { types: [schema.ShippingRateSettings] });
