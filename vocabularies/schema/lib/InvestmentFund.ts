import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InvestmentOrDepositMixin } from './InvestmentOrDeposit.js';

export interface InvestmentFund<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InvestmentOrDeposit<D>, RdfResource<D> {
}

export function InvestmentFundMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InvestmentFund> & RdfResourceCore> & Base {
  @namespace(schema)
  class InvestmentFundClass extends InvestmentOrDepositMixin(Resource) implements Partial<InvestmentFund> {
  }
  return InvestmentFundClass
}

class InvestmentFundImpl extends InvestmentFundMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InvestmentFund>) {
    super(arg, init)
    this.types.add(schema.InvestmentFund)
  }

  static readonly __mixins: Mixin[] = [InvestmentFundMixin, InvestmentOrDepositMixin];
}
InvestmentFundMixin.appliesTo = schema.InvestmentFund
InvestmentFundMixin.Class = InvestmentFundImpl

export const fromPointer = createFactory<InvestmentFund>([InvestmentOrDepositMixin, InvestmentFundMixin], { types: [schema.InvestmentFund] });
