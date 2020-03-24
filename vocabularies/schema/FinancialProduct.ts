import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ServiceMixin from './Service';

export interface FinancialProduct extends Schema.Service, RdfResource {
  annualPercentageRate: Schema.QuantitativeValue;
  annualPercentageRateLiteral: number;
  feesAndCommissionsSpecification: rdf.Term;
  feesAndCommissionsSpecificationLiteral: string;
  interestRate: Schema.QuantitativeValue;
  interestRateLiteral: number;
}

export default function FinancialProductMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FinancialProductClass extends ServiceMixin(Resource) implements FinancialProduct {
    @property.resource()
    annualPercentageRate!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.annualPercentageRate })
    annualPercentageRateLiteral!: number;
    @property()
    feesAndCommissionsSpecification!: rdf.Term;
    @property.literal({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationLiteral!: string;
    @property.resource()
    interestRate!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.interestRate })
    interestRateLiteral!: number;
  }
  return FinancialProductClass
}

class FinancialProductImpl extends FinancialProductMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.FinancialProduct)
  }
}
FinancialProductMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FinancialProduct)
FinancialProductMixin.Class = FinancialProductImpl
