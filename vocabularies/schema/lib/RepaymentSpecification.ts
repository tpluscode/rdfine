import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface RepaymentSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  downPayment: Schema.MonetaryAmount<D> | undefined;
  downPaymentLiteral: number | undefined;
  earlyPrepaymentPenalty: Schema.MonetaryAmount<D> | undefined;
  loanPaymentAmount: Schema.MonetaryAmount<D> | undefined;
  loanPaymentFrequency: number | undefined;
  numberOfLoanPayments: number | undefined;
}

export function RepaymentSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RepaymentSpecification & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RepaymentSpecificationClass extends StructuredValueMixin(Resource) {
    @rdfine.property.resource()
    downPayment: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ path: schema.downPayment, type: Number })
    downPaymentLiteral: number | undefined;
    @rdfine.property.resource()
    earlyPrepaymentPenalty: Schema.MonetaryAmount | undefined;
    @rdfine.property.resource()
    loanPaymentAmount: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ type: Number })
    loanPaymentFrequency: number | undefined;
    @rdfine.property.literal({ type: Number })
    numberOfLoanPayments: number | undefined;
  }
  return RepaymentSpecificationClass as any
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

export const fromPointer = createFactory<RepaymentSpecification>([StructuredValueMixin, RepaymentSpecificationMixin], { types: [schema.RepaymentSpecification] });
