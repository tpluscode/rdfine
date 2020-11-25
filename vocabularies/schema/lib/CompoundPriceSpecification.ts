import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface CompoundPriceSpecification<ID extends ResourceNode = ResourceNode> extends Schema.PriceSpecification<ID>, RdfResource<ID> {
  priceComponent: Schema.UnitPriceSpecification<SiblingNode<ID>> | undefined;
}

export function CompoundPriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CompoundPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements CompoundPriceSpecification {
    @property.resource()
    priceComponent: Schema.UnitPriceSpecification | undefined;
  }
  return CompoundPriceSpecificationClass
}

class CompoundPriceSpecificationImpl extends CompoundPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CompoundPriceSpecification>) {
    super(arg, init)
    this.types.add(schema.CompoundPriceSpecification)
  }

  static readonly __mixins: Mixin[] = [CompoundPriceSpecificationMixin, PriceSpecificationMixin];
}
CompoundPriceSpecificationMixin.appliesTo = schema.CompoundPriceSpecification
CompoundPriceSpecificationMixin.Class = CompoundPriceSpecificationImpl
