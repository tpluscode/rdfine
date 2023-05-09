import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface GeoCoordinates<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  address: Schema.PostalAddress<D> | undefined;
  addressCountry: Schema.Country<D> | undefined;
  addressCountryLiteral: string | undefined;
  addressLiteral: string | undefined;
  elevation: number | string | undefined;
  latitude: number | string | undefined;
  longitude: number | string | undefined;
  postalCode: string | undefined;
}

export function GeoCoordinatesMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<GeoCoordinates> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GeoCoordinatesClass extends StructuredValueMixin(Resource) implements Partial<GeoCoordinates> {
    @rdfine.property.resource()
    address: Schema.PostalAddress | undefined;
    @rdfine.property.resource()
    addressCountry: Schema.Country | undefined;
    @rdfine.property.literal({ path: schema.addressCountry })
    addressCountryLiteral: string | undefined;
    @rdfine.property.literal({ path: schema.address })
    addressLiteral: string | undefined;
    @rdfine.property.literal()
    elevation: number | string | undefined;
    @rdfine.property.literal()
    latitude: number | string | undefined;
    @rdfine.property.literal()
    longitude: number | string | undefined;
    @rdfine.property.literal()
    postalCode: string | undefined;
  }
  return GeoCoordinatesClass
}

class GeoCoordinatesImpl extends GeoCoordinatesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GeoCoordinates>) {
    super(arg, init)
    this.types.add(schema.GeoCoordinates)
  }

  static readonly __mixins: Mixin[] = [GeoCoordinatesMixin, StructuredValueMixin];
}
GeoCoordinatesMixin.appliesTo = schema.GeoCoordinates
GeoCoordinatesMixin.Class = GeoCoordinatesImpl

export const fromPointer = createFactory<GeoCoordinates>([StructuredValueMixin, GeoCoordinatesMixin], { types: [schema.GeoCoordinates] });
