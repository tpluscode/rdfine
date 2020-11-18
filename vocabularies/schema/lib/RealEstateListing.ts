import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface RealEstateListing<ID extends ResourceNode = ResourceNode> extends Schema.WebPage<ID>, RdfResource<ID> {
  datePosted: Date | undefined;
  leaseLength: Schema.Duration<SiblingNode<ID>> | Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
}

export function RealEstateListingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RealEstateListingClass extends WebPageMixin(Resource) implements RealEstateListing {
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
