import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface MonetaryAmount extends Schema.StructuredValue, RdfResource {
  currency: string;
  maxValue: number;
  minValue: number;
  validFrom: Date | Date;
  validThrough: Date | Date;
  value: Schema.StructuredValue;
  valueLiteral: boolean | number | string;
}

export default function MonetaryAmountMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MonetaryAmountClass extends StructuredValueMixin(Resource) implements MonetaryAmount {
    @property.literal()
    currency!: string;
    @property.literal({ type: Number })
    maxValue!: number;
    @property.literal({ type: Number })
    minValue!: number;
    @property.literal()
    validFrom!: Date | Date;
    @property.literal()
    validThrough!: Date | Date;
    @property.resource()
    value!: Schema.StructuredValue;
    @property.literal({ path: schema.value })
    valueLiteral!: boolean | number | string;
  }
  return MonetaryAmountClass
}

class MonetaryAmountImpl extends MonetaryAmountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MonetaryAmount>) {
    super(arg)
    this.types.add(schema.MonetaryAmount)
    initializeProperties(this, init)
  }
}
MonetaryAmountMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MonetaryAmount)
MonetaryAmountMixin.Class = MonetaryAmountImpl
