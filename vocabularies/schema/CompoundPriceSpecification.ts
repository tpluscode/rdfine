import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PriceSpecificationMixin from './PriceSpecification';

export interface CompoundPriceSpecification extends Schema.PriceSpecification, RdfResource {
  priceComponent: Schema.UnitPriceSpecification;
}

export default function CompoundPriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CompoundPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements CompoundPriceSpecification {
    @property.resource()
    priceComponent!: Schema.UnitPriceSpecification;
  }
  return CompoundPriceSpecificationClass
}

class CompoundPriceSpecificationImpl extends CompoundPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CompoundPriceSpecification>) {
    super(arg)
    this.types.add(schema.CompoundPriceSpecification)
    initializeProperties(this, init)
  }
}
CompoundPriceSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CompoundPriceSpecification)
CompoundPriceSpecificationMixin.Class = CompoundPriceSpecificationImpl
