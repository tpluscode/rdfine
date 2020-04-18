import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface MonetaryAmount extends Schema.StructuredValue, RdfResource {
  currency: string;
  maxValue: number;
  minValue: number;
  validFrom: Date;
  validThrough: Date;
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
    validFrom!: Date;
    @property.literal()
    validThrough!: Date;
    @property.resource()
    value!: Schema.StructuredValue;
    @property.literal({ path: schema.value })
    valueLiteral!: boolean | number | string;
  }
  return MonetaryAmountClass
}

class MonetaryAmountImpl extends MonetaryAmountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MonetaryAmount>) {
    super(arg, init)
    this.types.add(schema.MonetaryAmount)
  }
}
MonetaryAmountMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MonetaryAmount)
MonetaryAmountMixin.Class = MonetaryAmountImpl
