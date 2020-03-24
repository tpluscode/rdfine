import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface QuantitativeValue extends Schema.StructuredValue, RdfResource {
  additionalProperty: Schema.PropertyValue;
  maxValue: number;
  minValue: number;
  unitCode: rdf.Term;
  unitCodeLiteral: string;
  unitText: string;
  value: Schema.StructuredValue;
  valueLiteral: boolean | number | string;
  valueReference: Schema.PropertyValue | Schema.QualitativeValue | QuantitativeValue | Schema.StructuredValue;
}

export default function QuantitativeValueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuantitativeValueClass extends StructuredValueMixin(Resource) implements QuantitativeValue {
    @property.resource()
    additionalProperty!: Schema.PropertyValue;
    @property.literal({ type: Number })
    maxValue!: number;
    @property.literal({ type: Number })
    minValue!: number;
    @property()
    unitCode!: rdf.Term;
    @property.literal({ path: schema.unitCode })
    unitCodeLiteral!: string;
    @property.literal()
    unitText!: string;
    @property.resource()
    value!: Schema.StructuredValue;
    @property.literal({ path: schema.value })
    valueLiteral!: boolean | number | string;
    @property.resource()
    valueReference!: Schema.PropertyValue | Schema.QualitativeValue | QuantitativeValue | Schema.StructuredValue;
  }
  return QuantitativeValueClass
}

class QuantitativeValueImpl extends QuantitativeValueMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.QuantitativeValue)
  }
}
QuantitativeValueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.QuantitativeValue)
QuantitativeValueMixin.Class = QuantitativeValueImpl
