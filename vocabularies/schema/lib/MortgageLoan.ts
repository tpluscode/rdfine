import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LoanOrCreditMixin } from './LoanOrCredit.js';

export interface MortgageLoan<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LoanOrCredit<D>, rdfine.RdfResource<D> {
  domiciledMortgage: boolean | undefined;
  loanMortgageMandateAmount: Schema.MonetaryAmount<D> | undefined;
}

export function MortgageLoanMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MortgageLoan & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MortgageLoanClass extends LoanOrCreditMixin(Resource) {
    @rdfine.property.literal({ type: Boolean })
    domiciledMortgage: boolean | undefined;
    @rdfine.property.resource()
    loanMortgageMandateAmount: Schema.MonetaryAmount | undefined;
  }
  return MortgageLoanClass as any
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
