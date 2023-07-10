import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TransferActionMixin } from './TransferAction.js';

export interface MoneyTransfer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, rdfine.RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
  beneficiaryBank: Schema.BankOrCreditUnion<D> | undefined;
  beneficiaryBankLiteral: string | undefined;
}

export function MoneyTransferMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MoneyTransfer & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MoneyTransferClass extends TransferActionMixin(Resource) {
    @rdfine.property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @rdfine.property.resource()
    beneficiaryBank: Schema.BankOrCreditUnion | undefined;
    @rdfine.property.literal({ path: schema.beneficiaryBank })
    beneficiaryBankLiteral: string | undefined;
  }
  return MoneyTransferClass as any
}

class MoneyTransferImpl extends MoneyTransferMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MoneyTransfer>) {
    super(arg, init)
    this.types.add(schema.MoneyTransfer)
  }

  static readonly __mixins: Mixin[] = [MoneyTransferMixin, TransferActionMixin];
}
MoneyTransferMixin.appliesTo = schema.MoneyTransfer
MoneyTransferMixin.Class = MoneyTransferImpl

export const fromPointer = createFactory<MoneyTransfer>([TransferActionMixin, MoneyTransferMixin], { types: [schema.MoneyTransfer] });
