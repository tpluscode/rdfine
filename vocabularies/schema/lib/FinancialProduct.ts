import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ServiceMixin } from './Service.js';

export interface FinancialProduct<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
  annualPercentageRate: Schema.QuantitativeValue<D> | undefined;
  annualPercentageRateLiteral: number | undefined;
  feesAndCommissionsSpecification: string | undefined;
  feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
  interestRate: Schema.QuantitativeValue<D> | undefined;
  interestRateLiteral: number | undefined;
}

export function FinancialProductMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FinancialProduct> & RdfResourceCore> & Base {
  @namespace(schema)
  class FinancialProductClass extends ServiceMixin(Resource) implements Partial<FinancialProduct> {
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

export const fromPointer = createFactory<FinancialProduct>([ServiceMixin, FinancialProductMixin], { types: [schema.FinancialProduct] });
