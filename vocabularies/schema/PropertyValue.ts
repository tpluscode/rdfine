import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface PropertyValue extends Schema.StructuredValue, RdfResource {
  maxValue: number;
  minValue: number;
  propertyID: string | string;
  unitCode: string | string;
  unitText: string;
  value: Schema.StructuredValue;
  valueLiteral: boolean | number | string;
  valueReference: PropertyValue | Schema.QualitativeValue | Schema.QuantitativeValue | Schema.StructuredValue;
}

export default function PropertyValueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PropertyValueClass extends StructuredValueMixin(Resource) implements PropertyValue {
    @property.literal({ type: Number })
    maxValue!: number;
    @property.literal({ type: Number })
    minValue!: number;
    @property.literal()
    propertyID!: string | string;
    @property.literal()
    unitCode!: string | string;
    @property.literal()
    unitText!: string;
    @property.resource()
    value!: Schema.StructuredValue;
    @property.literal({ path: schema.value })
    valueLiteral!: boolean | number | string;
    @property.resource()
    valueReference!: PropertyValue | Schema.QualitativeValue | Schema.QuantitativeValue | Schema.StructuredValue;
  }
  return PropertyValueClass
}

class PropertyValueImpl extends PropertyValueMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PropertyValue)
  }
}
PropertyValueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PropertyValue)
PropertyValueMixin.Class = PropertyValueImpl
