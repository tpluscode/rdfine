import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialServiceMixin } from './FinancialService.js';

export interface BankOrCreditUnion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialService<D>, RdfResource<D> {
}

export function BankOrCreditUnionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BankOrCreditUnion> & RdfResourceCore> & Base {
  @namespace(schema)
  class BankOrCreditUnionClass extends FinancialServiceMixin(Resource) implements Partial<BankOrCreditUnion> {
  }
  return BankOrCreditUnionClass
}

class BankOrCreditUnionImpl extends BankOrCreditUnionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BankOrCreditUnion>) {
    super(arg, init)
    this.types.add(schema.BankOrCreditUnion)
  }

  static readonly __mixins: Mixin[] = [BankOrCreditUnionMixin, FinancialServiceMixin];
}
BankOrCreditUnionMixin.appliesTo = schema.BankOrCreditUnion
BankOrCreditUnionMixin.Class = BankOrCreditUnionImpl

export const fromPointer = createFactory<BankOrCreditUnion>([FinancialServiceMixin, BankOrCreditUnionMixin], { types: [schema.BankOrCreditUnion] });
