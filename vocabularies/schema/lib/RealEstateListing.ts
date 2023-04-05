import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface RealEstateListing<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, RdfResource<D> {
  datePosted: Date | undefined;
  leaseLength: Schema.Duration<D> | Schema.QuantitativeValue<D> | undefined;
}

export function RealEstateListingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RealEstateListing> & RdfResourceCore> & Base {
  @namespace(schema)
  class RealEstateListingClass extends WebPageMixin(Resource) implements Partial<RealEstateListing> {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    datePosted: Date | undefined;
    @property.resource()
    leaseLength: Schema.Duration | Schema.QuantitativeValue | undefined;
  }
  return RealEstateListingClass
}

class RealEstateListingImpl extends RealEstateListingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RealEstateListing>) {
    super(arg, init)
    this.types.add(schema.RealEstateListing)
  }

  static readonly __mixins: Mixin[] = [RealEstateListingMixin, WebPageMixin];
}
RealEstateListingMixin.appliesTo = schema.RealEstateListing
RealEstateListingMixin.Class = RealEstateListingImpl

export const fromPointer = createFactory<RealEstateListing>([WebPageMixin, RealEstateListingMixin], { types: [schema.RealEstateListing] });
