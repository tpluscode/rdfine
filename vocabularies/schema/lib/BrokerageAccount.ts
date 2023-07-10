import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InvestmentOrDepositMixin } from './InvestmentOrDeposit.js';

export interface BrokerageAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InvestmentOrDeposit<D>, rdfine.RdfResource<D> {
}

export function BrokerageAccountMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BrokerageAccount & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BrokerageAccountClass extends InvestmentOrDepositMixin(Resource) {
  }
  return BrokerageAccountClass as any
}

class BrokerageAccountImpl extends BrokerageAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BrokerageAccount>) {
    super(arg, init)
    this.types.add(schema.BrokerageAccount)
  }

  static readonly __mixins: Mixin[] = [BrokerageAccountMixin, InvestmentOrDepositMixin];
}
BrokerageAccountMixin.appliesTo = schema.BrokerageAccount
BrokerageAccountMixin.Class = BrokerageAccountImpl

export const fromPointer = createFactory<BrokerageAccount>([InvestmentOrDepositMixin, BrokerageAccountMixin], { types: [schema.BrokerageAccount] });
