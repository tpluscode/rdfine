import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface GeoCoordinates extends Schema.StructuredValue, RdfResource {
  address: Schema.PostalAddress;
  addressLiteral: string;
  addressCountry: Schema.Country;
  addressCountryLiteral: string;
  elevation: number | string;
  latitude: number | string;
  longitude: number | string;
  postalCode: string;
}

export default function GeoCoordinatesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GeoCoordinatesClass extends StructuredValueMixin(Resource) implements GeoCoordinates {
    @property.resource()
    address!: Schema.PostalAddress;
    @property.literal({ path: schema.address })
    addressLiteral!: string;
    @property.resource()
    addressCountry!: Schema.Country;
    @property.literal({ path: schema.addressCountry })
    addressCountryLiteral!: string;
    @property.literal()
    elevation!: number | string;
    @property.literal()
    latitude!: number | string;
    @property.literal()
    longitude!: number | string;
    @property.literal()
    postalCode!: string;
  }
  return GeoCoordinatesClass
}

class GeoCoordinatesImpl extends GeoCoordinatesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<GeoCoordinates>) {
    super(arg)
    this.types.add(schema.GeoCoordinates)
    initializeProperties(this, init)
  }
}
GeoCoordinatesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GeoCoordinates)
GeoCoordinatesMixin.Class = GeoCoordinatesImpl
