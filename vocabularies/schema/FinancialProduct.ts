import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ServiceMixin from './Service';

export interface FinancialProduct extends Schema.Service, RdfResource {
  annualPercentageRate: Schema.QuantitativeValue;
  annualPercentageRateLiteral: number;
  feesAndCommissionsSpecification: string;
  feesAndCommissionsSpecificationTerm: rdf.NamedNode;
  interestRate: Schema.QuantitativeValue;
  interestRateLiteral: number;
}

export default function FinancialProductMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FinancialProductClass extends ServiceMixin(Resource) implements FinancialProduct {
    @property.resource()
    annualPercentageRate!: Schema.QuantitativeValue;
    @property.literal({ path: schema.annualPercentageRate, type: Number })
    annualPercentageRateLiteral!: number;
    @property.literal()
    feesAndCommissionsSpecification!: string;
    @property({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationTerm!: rdf.NamedNode;
    @property.resource()
    interestRate!: Schema.QuantitativeValue;
    @property.literal({ path: schema.interestRate, type: Number })
    interestRateLiteral!: number;
  }
  return FinancialProductClass
}

class FinancialProductImpl extends FinancialProductMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FinancialProduct>) {
    super(arg, init)
    this.types.add(schema.FinancialProduct)
  }
}
FinancialProductMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FinancialProduct)
FinancialProductMixin.Class = FinancialProductImpl
