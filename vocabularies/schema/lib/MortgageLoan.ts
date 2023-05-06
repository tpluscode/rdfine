import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LoanOrCreditMixin } from './LoanOrCredit.js';

export interface MortgageLoan<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LoanOrCredit<D>, RdfResource<D> {
  domiciledMortgage: boolean | undefined;
  loanMortgageMandateAmount: Schema.MonetaryAmount<D> | undefined;
}

export function MortgageLoanMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MortgageLoan> & RdfResourceCore> & Base {
  @namespace(schema)
  class MortgageLoanClass extends LoanOrCreditMixin(Resource) implements Partial<MortgageLoan> {
    @property.literal({ type: Boolean })
    domiciledMortgage: boolean | undefined;
    @property.resource()
    loanMortgageMandateAmount: Schema.MonetaryAmount | undefined;
  }
  return MortgageLoanClass
}

class MortgageLoanImpl extends MortgageLoanMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MortgageLoan>) {
    super(arg, init)
    this.types.add(schema.MortgageLoan)
  }

  static readonly __mixins: Mixin[] = [MortgageLoanMixin, LoanOrCreditMixin];
}
MortgageLoanMixin.appliesTo = schema.MortgageLoan
MortgageLoanMixin.Class = MortgageLoanImpl

export const fromPointer = createFactory<MortgageLoan>([LoanOrCreditMixin, MortgageLoanMixin], { types: [schema.MortgageLoan] });
