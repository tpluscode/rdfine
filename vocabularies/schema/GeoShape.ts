import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface GeoShape extends Schema.StructuredValue, RdfResource {
  address: Schema.PostalAddress;
  addressLiteral: string;
  addressCountry: Schema.Country;
  addressCountryLiteral: string;
  box: string;
  circle: string;
  elevation: number | string;
  line: string;
  polygon: string;
  postalCode: string;
}

export default function GeoShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GeoShapeClass extends StructuredValueMixin(Resource) implements GeoShape {
    @property.resource()
    address!: Schema.PostalAddress;
    @property.literal({ path: schema.address })
    addressLiteral!: string;
    @property.resource()
    addressCountry!: Schema.Country;
    @property.literal({ path: schema.addressCountry })
    addressCountryLiteral!: string;
    @property.literal()
    box!: string;
    @property.literal()
    circle!: string;
    @property.literal()
    elevation!: number | string;
    @property.literal()
    line!: string;
    @property.literal()
    polygon!: string;
    @property.literal()
    postalCode!: string;
  }
  return GeoShapeClass
}

class GeoShapeImpl extends GeoShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GeoShape>) {
    super(arg, init)
    this.types.add(schema.GeoShape)
  }
}
GeoShapeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GeoShape)
GeoShapeMixin.Class = GeoShapeImpl
