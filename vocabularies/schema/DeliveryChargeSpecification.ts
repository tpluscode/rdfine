import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface DeliveryChargeSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PriceSpecification<D>, RdfResource<D> {
  appliesToDeliveryMethod: Schema.DeliveryMethod | undefined;
  areaServed: Schema.AdministrativeArea<D> | Schema.GeoShape<D> | Schema.Place<D> | undefined;
  areaServedLiteral: string | undefined;
  eligibleRegion: Schema.GeoShape<D> | Schema.Place<D> | undefined;
  eligibleRegionLiteral: string | undefined;
  ineligibleRegion: Schema.GeoShape<D> | Schema.Place<D> | undefined;
  ineligibleRegionLiteral: string | undefined;
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
    @property.resource()
    ineligibleRegion: Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.ineligibleRegion })
    ineligibleRegionLiteral: string | undefined;
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
