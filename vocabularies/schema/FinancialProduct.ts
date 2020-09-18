import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ServiceMixin } from './Service';

export interface FinancialProduct extends Schema.Service, RdfResource {
  annualPercentageRate: Schema.QuantitativeValue | undefined;
  annualPercentageRateLiteral: number | undefined;
  feesAndCommissionsSpecification: string | undefined;
  feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
  interestRate: Schema.QuantitativeValue | undefined;
  interestRateLiteral: number | undefined;
}

export function FinancialProductMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FinancialProductClass extends ServiceMixin(Resource) implements FinancialProduct {
    @property.resource()
    annualPercentageRate: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.annualPercentageRate, type: Number })
    annualPercentageRateLiteral: number | undefined;
    @property.literal()
    feesAndCommissionsSpecification: string | undefined;
    @property({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
    @property.resource()
    interestRate: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.interestRate, type: Number })
    interestRateLiteral: number | undefined;
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
