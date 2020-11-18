import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface GeoCoordinates<ID extends ResourceNode = ResourceNode> extends Schema.StructuredValue<ID>, RdfResource<ID> {
  address: Schema.PostalAddress<SiblingNode<ID>> | undefined;
  addressLiteral: string | undefined;
  addressCountry: Schema.Country<SiblingNode<ID>> | undefined;
  addressCountryLiteral: string | undefined;
  elevation: number | string | undefined;
  latitude: number | string | undefined;
  longitude: number | string | undefined;
  postalCode: string | undefined;
}

export function GeoCoordinatesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GeoCoordinatesClass extends StructuredValueMixin(Resource) implements GeoCoordinates {
    @property.resource()
    address: Schema.PostalAddress | undefined;
    @property.literal({ path: schema.address })
    addressLiteral: string | undefined;
    @property.resource()
    addressCountry: Schema.Country | undefined;
    @property.literal({ path: schema.addressCountry })
    addressCountryLiteral: string | undefined;
    @property.literal()
    elevation: number | string | undefined;
    @property.literal()
    latitude: number | string | undefined;
    @property.literal()
    longitude: number | string | undefined;
    @property.literal()
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
