import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface DeliveryChargeSpecification<ID extends ResourceNode = ResourceNode> extends Schema.PriceSpecification<ID>, RdfResource<ID> {
  appliesToDeliveryMethod: Schema.DeliveryMethod | undefined;
  areaServed: Schema.AdministrativeArea<SiblingNode<ID>> | Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  areaServedLiteral: string | undefined;
  eligibleRegion: Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  eligibleRegionLiteral: string | undefined;
  ineligibleRegion: Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
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
