import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { InvestmentOrDepositMixin } from './InvestmentOrDeposit';

export interface BrokerageAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InvestmentOrDeposit<D>, RdfResource<D> {
}

export function BrokerageAccountMixin<Base extends Constructor>(Resource: Base): Constructor<BrokerageAccount> & Base {
  @namespace(schema)
  class BrokerageAccountClass extends InvestmentOrDepositMixin(Resource) implements BrokerageAccount {
  }
  return BrokerageAccountClass
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
