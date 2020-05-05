import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ServiceMixin } from './Service';

export interface FinancialProduct extends Schema.Service, RdfResource {
  annualPercentageRate: Schema.QuantitativeValue;
  annualPercentageRateLiteral: number;
  feesAndCommissionsSpecification: string;
  feesAndCommissionsSpecificationTerm: RDF.NamedNode;
  interestRate: Schema.QuantitativeValue;
  interestRateLiteral: number;
}

export function FinancialProductMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FinancialProductClass extends ServiceMixin(Resource) implements FinancialProduct {
    @property.resource()
    annualPercentageRate!: Schema.QuantitativeValue;
    @property.literal({ path: schema.annualPercentageRate, type: Number })
    annualPercentageRateLiteral!: number;
    @property.literal()
    feesAndCommissionsSpecification!: string;
    @property({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationTerm!: RDF.NamedNode;
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

  static readonly __mixins: Mixin[] = [FinancialProductMixin, ServiceMixin];
}
FinancialProductMixin.appliesTo = schema.FinancialProduct
FinancialProductMixin.Class = FinancialProductImpl
