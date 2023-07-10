import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InvestmentOrDepositMixin } from './InvestmentOrDeposit.js';

export interface InvestmentFund<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InvestmentOrDeposit<D>, rdfine.RdfResource<D> {
}

export function InvestmentFundMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<InvestmentFund & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InvestmentFundClass extends InvestmentOrDepositMixin(Resource) {
  }
  return InvestmentFundClass as any
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
