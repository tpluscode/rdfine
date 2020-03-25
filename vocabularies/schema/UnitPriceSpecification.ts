import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PriceSpecificationMixin from './PriceSpecification';

export interface UnitPriceSpecification extends Schema.PriceSpecification, RdfResource {
  billingIncrement: number;
  priceType: string;
  referenceQuantity: Schema.QuantitativeValue;
  unitCode: rdf.Term;
  unitCodeLiteral: string;
  unitText: string;
}

export default function UnitPriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UnitPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements UnitPriceSpecification {
    @property.literal({ type: Number })
    billingIncrement!: number;
    @property.literal()
    priceType!: string;
    @property.resource()
    referenceQuantity!: Schema.QuantitativeValue;
    @property()
    unitCode!: rdf.Term;
    @property.literal({ path: schema.unitCode })
    unitCodeLiteral!: string;
    @property.literal()
    unitText!: string;
  }
  return UnitPriceSpecificationClass
}

class UnitPriceSpecificationImpl extends UnitPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<UnitPriceSpecification>) {
    super(arg)
    this.types.add(schema.UnitPriceSpecification)
    initializeProperties<UnitPriceSpecification>(this, init)
  }
}
UnitPriceSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UnitPriceSpecification)
UnitPriceSpecificationMixin.Class = UnitPriceSpecificationImpl
