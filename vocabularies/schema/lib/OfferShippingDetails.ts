import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface OfferShippingDetails<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  deliveryTime: Schema.ShippingDeliveryTime<D> | undefined;
  doesNotShip: boolean | undefined;
  shippingDestination: Schema.DefinedRegion<D> | undefined;
  shippingLabel: string | undefined;
  shippingRate: Schema.MonetaryAmount<D> | undefined;
  shippingSettingsLink: RDF.NamedNode | undefined;
  transitTimeLabel: string | undefined;
}

export function OfferShippingDetailsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OfferShippingDetailsClass extends StructuredValueMixin(Resource) implements OfferShippingDetails {
    @property.resource()
    deliveryTime: Schema.ShippingDeliveryTime | undefined;
    @property.literal({ type: Boolean })
    doesNotShip: boolean | undefined;
    @property.resource()
    shippingDestination: Schema.DefinedRegion | undefined;
    @property.literal()
    shippingLabel: string | undefined;
    @property.resource()
    shippingRate: Schema.MonetaryAmount | undefined;
    @property()
    shippingSettingsLink: RDF.NamedNode | undefined;
    @property.literal()
    transitTimeLabel: string | undefined;
  }
  return OfferShippingDetailsClass
}

class OfferShippingDetailsImpl extends OfferShippingDetailsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OfferShippingDetails>) {
    super(arg, init)
    this.types.add(schema.OfferShippingDetails)
  }

  static readonly __mixins: Mixin[] = [OfferShippingDetailsMixin, StructuredValueMixin];
}
OfferShippingDetailsMixin.appliesTo = schema.OfferShippingDetails
OfferShippingDetailsMixin.Class = OfferShippingDetailsImpl
