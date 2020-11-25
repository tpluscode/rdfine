import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface DeliveryTimeSettings<ID extends ResourceNode = ResourceNode> extends Schema.StructuredValue<ID>, RdfResource<ID> {
  deliveryTime: Schema.ShippingDeliveryTime<SiblingNode<ID>> | undefined;
  isUnlabelledFallback: boolean | undefined;
  shippingDestination: Schema.DefinedRegion<SiblingNode<ID>> | undefined;
  transitTimeLabel: string | undefined;
}

export function DeliveryTimeSettingsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeliveryTimeSettingsClass extends StructuredValueMixin(Resource) implements DeliveryTimeSettings {
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
