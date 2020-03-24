import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface DatedMoneySpecification extends Schema.StructuredValue, RdfResource {
  amount: Schema.MonetaryAmount;
  amountLiteral: number;
  currency: string;
  endDate: Date | Date;
  startDate: Date | Date;
}

export default function DatedMoneySpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DatedMoneySpecificationClass extends StructuredValueMixin(Resource) implements DatedMoneySpecification {
    @property.resource()
    amount!: Schema.MonetaryAmount;
    @property.literal({ type: Number, path: schema.amount })
    amountLiteral!: number;
    @property.literal()
    currency!: string;
    @property.literal()
    endDate!: Date | Date;
    @property.literal()
    startDate!: Date | Date;
  }
  return DatedMoneySpecificationClass
}

class DatedMoneySpecificationImpl extends DatedMoneySpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DatedMoneySpecification>) {
    super(arg)
    this.types.add(schema.DatedMoneySpecification)
    initializeProperties(this, init)
  }
}
DatedMoneySpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DatedMoneySpecification)
DatedMoneySpecificationMixin.Class = DatedMoneySpecificationImpl
