import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface CompoundPriceSpecification extends Schema.PriceSpecification, RdfResource {
  priceComponent: Schema.UnitPriceSpecification;
}

export function CompoundPriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CompoundPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements CompoundPriceSpecification {
    @property.resource()
    priceComponent!: Schema.UnitPriceSpecification;
  }
  return CompoundPriceSpecificationClass
}

class CompoundPriceSpecificationImpl extends CompoundPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CompoundPriceSpecification>) {
    super(arg, init)
    this.types.add(schema.CompoundPriceSpecification)
  }
}
CompoundPriceSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CompoundPriceSpecification)
CompoundPriceSpecificationMixin.Class = CompoundPriceSpecificationImpl
