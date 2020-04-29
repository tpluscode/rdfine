import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface DatedMoneySpecification extends Schema.StructuredValue, RdfResource {
  amount: Schema.MonetaryAmount;
  amountLiteral: number;
  currency: string;
  endDate: Date;
  startDate: Date;
}

export function DatedMoneySpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DatedMoneySpecificationClass extends StructuredValueMixin(Resource) implements DatedMoneySpecification {
    @property.resource()
    amount!: Schema.MonetaryAmount;
    @property.literal({ path: schema.amount, type: Number })
    amountLiteral!: number;
    @property.literal()
    currency!: string;
    @property.literal()
    endDate!: Date;
    @property.literal()
    startDate!: Date;
  }
  return DatedMoneySpecificationClass
}

class DatedMoneySpecificationImpl extends DatedMoneySpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DatedMoneySpecification>) {
    super(arg, init)
    this.types.add(schema.DatedMoneySpecification)
  }
}
DatedMoneySpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DatedMoneySpecification)
DatedMoneySpecificationMixin.Class = DatedMoneySpecificationImpl
