import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PriceSpecificationMixin from './PriceSpecification';

export interface DeliveryChargeSpecification extends Schema.PriceSpecification, RdfResource {
  appliesToDeliveryMethod: Schema.DeliveryMethod;
  areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
  areaServedLiteral: string;
  eligibleRegion: Schema.GeoShape | Schema.Place;
  eligibleRegionLiteral: string;
}

export default function DeliveryChargeSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeliveryChargeSpecificationClass extends PriceSpecificationMixin(Resource) implements DeliveryChargeSpecification {
    @property()
    appliesToDeliveryMethod!: Schema.DeliveryMethod;
    @property.resource()
    areaServed!: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral!: string;
    @property.resource()
    eligibleRegion!: Schema.GeoShape | Schema.Place;
    @property.literal({ path: schema.eligibleRegion })
    eligibleRegionLiteral!: string;
  }
  return DeliveryChargeSpecificationClass
}

class DeliveryChargeSpecificationImpl extends DeliveryChargeSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeliveryChargeSpecification>) {
    super(arg, init)
    this.types.add(schema.DeliveryChargeSpecification)
  }
}
DeliveryChargeSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DeliveryChargeSpecification)
DeliveryChargeSpecificationMixin.Class = DeliveryChargeSpecificationImpl
