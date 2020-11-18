import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface RepaymentSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  downPayment: Schema.MonetaryAmount<D> | undefined;
  downPaymentLiteral: number | undefined;
  earlyPrepaymentPenalty: Schema.MonetaryAmount<D> | undefined;
  loanPaymentAmount: Schema.MonetaryAmount<D> | undefined;
  loanPaymentFrequency: number | undefined;
  numberOfLoanPayments: number | undefined;
}

export function RepaymentSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RepaymentSpecificationClass extends StructuredValueMixin(Resource) implements RepaymentSpecification {
    @property.resource()
    downPayment: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.downPayment, type: Number })
    downPaymentLiteral: number | undefined;
    @property.resource()
    earlyPrepaymentPenalty: Schema.MonetaryAmount | undefined;
    @property.resource()
    loanPaymentAmount: Schema.MonetaryAmount | undefined;
    @property.literal({ type: Number })
    loanPaymentFrequency: number | undefined;
    @property.literal({ type: Number })
    numberOfLoanPayments: number | undefined;
  }
  return RepaymentSpecificationClass
}

class RepaymentSpecificationImpl extends RepaymentSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RepaymentSpecification>) {
    super(arg, init)
    this.types.add(schema.RepaymentSpecification)
  }

  static readonly __mixins: Mixin[] = [RepaymentSpecificationMixin, StructuredValueMixin];
}
RepaymentSpecificationMixin.appliesTo = schema.RepaymentSpecification
RepaymentSpecificationMixin.Class = RepaymentSpecificationImpl
