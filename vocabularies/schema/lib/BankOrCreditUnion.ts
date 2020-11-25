import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialServiceMixin } from './FinancialService';

export interface BankOrCreditUnion<ID extends ResourceNode = ResourceNode> extends Schema.FinancialService<ID>, RdfResource<ID> {
}

export function BankOrCreditUnionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BankOrCreditUnionClass extends FinancialServiceMixin(Resource) implements BankOrCreditUnion {
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
