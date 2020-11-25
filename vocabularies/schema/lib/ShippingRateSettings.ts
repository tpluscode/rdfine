import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface ShippingRateSettings<ID extends ResourceNode = ResourceNode> extends Schema.StructuredValue<ID>, RdfResource<ID> {
  doesNotShip: boolean | undefined;
  freeShippingThreshold: Schema.DeliveryChargeSpecification<SiblingNode<ID>> | Schema.MonetaryAmount<SiblingNode<ID>> | undefined;
  isUnlabelledFallback: boolean | undefined;
  shippingDestination: Schema.DefinedRegion<SiblingNode<ID>> | undefined;
  shippingLabel: string | undefined;
  shippingRate: Schema.MonetaryAmount<SiblingNode<ID>> | undefined;
}

export function ShippingRateSettingsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ShippingRateSettingsClass extends StructuredValueMixin(Resource) implements ShippingRateSettings {
    @property.literal({ type: Boolean })
    doesNotShip: boolean | undefined;
    @property.resource()
    freeShippingThreshold: Schema.DeliveryChargeSpecification | Schema.MonetaryAmount | undefined;
    @property.literal({ type: Boolean })
    isUnlabelledFallback: boolean | undefined;
    @property.resource()
    shippingDestination: Schema.DefinedRegion | undefined;
    @property.literal()
    shippingLabel: string | undefined;
    @property.resource()
    shippingRate: Schema.MonetaryAmount | undefined;
  }
  return ShippingRateSettingsClass
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
