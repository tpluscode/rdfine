import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface MoneyTransfer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
  beneficiaryBank: Schema.BankOrCreditUnion<D> | undefined;
  beneficiaryBankLiteral: string | undefined;
}

export function MoneyTransferMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MoneyTransfer> & RdfResourceCore> & Base {
  @namespace(schema)
  class MoneyTransferClass extends TransferActionMixin(Resource) implements Partial<MoneyTransfer> {
    @property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @property.resource()
    beneficiaryBank: Schema.BankOrCreditUnion | undefined;
    @property.literal({ path: schema.beneficiaryBank })
    beneficiaryBankLiteral: string | undefined;
  }
  return MoneyTransferClass
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
