import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LoanOrCreditMixin } from './LoanOrCredit';

export interface MortgageLoan<ID extends ResourceNode = ResourceNode> extends Schema.LoanOrCredit<ID>, RdfResource<ID> {
  domiciledMortgage: boolean | undefined;
  loanMortgageMandateAmount: Schema.MonetaryAmount<SiblingNode<ID>> | undefined;
}

export function MortgageLoanMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MortgageLoanClass extends LoanOrCreditMixin(Resource) implements MortgageLoan {
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
