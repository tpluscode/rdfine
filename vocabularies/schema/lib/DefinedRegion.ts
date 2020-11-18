import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface DefinedRegion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  addressCountry: Schema.Country<D> | undefined;
  addressCountryLiteral: string | undefined;
  addressRegion: string | undefined;
  postalCode: string | undefined;
  postalCodePrefix: string | undefined;
  postalCodeRange: Schema.PostalCodeRangeSpecification<D> | undefined;
}

export function DefinedRegionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DefinedRegionClass extends StructuredValueMixin(Resource) implements DefinedRegion {
    @property.resource()
    addressCountry: Schema.Country | undefined;
    @property.literal({ path: schema.addressCountry })
    addressCountryLiteral: string | undefined;
    @property.literal()
    addressRegion: string | undefined;
    @property.literal()
    postalCode: string | undefined;
    @property.literal()
    postalCodePrefix: string | undefined;
    @property.resource()
    postalCodeRange: Schema.PostalCodeRangeSpecification | undefined;
  }
  return DefinedRegionClass
}

class DefinedRegionImpl extends DefinedRegionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DefinedRegion>) {
    super(arg, init)
    this.types.add(schema.DefinedRegion)
  }

  static readonly __mixins: Mixin[] = [DefinedRegionMixin, StructuredValueMixin];
}
DefinedRegionMixin.appliesTo = schema.DefinedRegion
DefinedRegionMixin.Class = DefinedRegionImpl
