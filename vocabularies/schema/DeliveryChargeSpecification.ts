import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface DeliveryChargeSpecification extends Schema.PriceSpecification, RdfResource {
  appliesToDeliveryMethod: Schema.DeliveryMethod | undefined;
  areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
  areaServedLiteral: string | undefined;
  eligibleRegion: Schema.GeoShape | Schema.Place | undefined;
  eligibleRegionLiteral: string | undefined;
}

export function DeliveryChargeSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeliveryChargeSpecificationClass extends PriceSpecificationMixin(Resource) implements DeliveryChargeSpecification {
    @property()
    appliesToDeliveryMethod: Schema.DeliveryMethod | undefined;
    @property.resource()
    areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral: string | undefined;
    @property.resource()
    eligibleRegion: Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.eligibleRegion })
    eligibleRegionLiteral: string | undefined;
  }
  return DeliveryChargeSpecificationClass
}

class DeliveryChargeSpecificationImpl extends DeliveryChargeSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeliveryChargeSpecification>) {
    super(arg, init)
    this.types.add(schema.DeliveryChargeSpecification)
  }

  static readonly __mixins: Mixin[] = [DeliveryChargeSpecificationMixin, PriceSpecificationMixin];
}
DeliveryChargeSpecificationMixin.appliesTo = schema.DeliveryChargeSpecification
DeliveryChargeSpecificationMixin.Class = DeliveryChargeSpecificationImpl
