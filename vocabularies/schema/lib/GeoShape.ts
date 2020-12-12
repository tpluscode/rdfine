import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface GeoShape<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  address: Schema.PostalAddress<D> | undefined;
  addressLiteral: string | undefined;
  addressCountry: Schema.Country<D> | undefined;
  addressCountryLiteral: string | undefined;
  box: string | undefined;
  circle: string | undefined;
  elevation: number | string | undefined;
  line: string | undefined;
  polygon: string | undefined;
  postalCode: string | undefined;
}

export function GeoShapeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GeoShape> & RdfResourceCore> & Base {
  @namespace(schema)
  class GeoShapeClass extends StructuredValueMixin(Resource) implements Partial<GeoShape> {
    @property.resource()
    address: Schema.PostalAddress | undefined;
    @property.literal({ path: schema.address })
    addressLiteral: string | undefined;
    @property.resource()
    addressCountry: Schema.Country | undefined;
    @property.literal({ path: schema.addressCountry })
    addressCountryLiteral: string | undefined;
    @property.literal()
    box: string | undefined;
    @property.literal()
    circle: string | undefined;
    @property.literal()
    elevation: number | string | undefined;
    @property.literal()
    line: string | undefined;
    @property.literal()
    polygon: string | undefined;
    @property.literal()
    postalCode: string | undefined;
  }
  return GeoShapeClass
}

class GeoShapeImpl extends GeoShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GeoShape>) {
    super(arg, init)
    this.types.add(schema.GeoShape)
  }

  static readonly __mixins: Mixin[] = [GeoShapeMixin, StructuredValueMixin];
}
GeoShapeMixin.appliesTo = schema.GeoShape
GeoShapeMixin.Class = GeoShapeImpl
