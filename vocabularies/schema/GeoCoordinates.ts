import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

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

export function GeoCoordinatesMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<GeoCoordinates>) {
    super(arg, init)
    this.types.add(schema.GeoCoordinates)
  }
}
GeoCoordinatesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GeoCoordinates)
GeoCoordinatesMixin.Class = GeoCoordinatesImpl
