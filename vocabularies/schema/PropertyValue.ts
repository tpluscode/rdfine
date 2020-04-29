import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface PropertyValue extends Schema.StructuredValue, RdfResource {
  maxValue: number;
  minValue: number;
  propertyID: string;
  propertyIDTerm: RDF.NamedNode;
  unitCode: string;
  unitCodeTerm: RDF.NamedNode;
  unitText: string;
  value: Schema.StructuredValue;
  valueLiteral: boolean | number | string;
  valueReference: Schema.PropertyValue | Schema.QuantitativeValue | Schema.StructuredValue;
}

export function PropertyValueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PropertyValueClass extends StructuredValueMixin(Resource) implements PropertyValue {
    @property.literal({ type: Number })
    maxValue!: number;
    @property.literal({ type: Number })
    minValue!: number;
    @property.literal()
    propertyID!: string;
    @property({ path: schema.propertyID })
    propertyIDTerm!: RDF.NamedNode;
    @property.literal()
    unitCode!: string;
    @property({ path: schema.unitCode })
    unitCodeTerm!: RDF.NamedNode;
    @property.literal()
    unitText!: string;
    @property.resource()
    value!: Schema.StructuredValue;
    @property.literal({ path: schema.value })
    valueLiteral!: boolean | number | string;
    @property.resource()
    valueReference!: Schema.PropertyValue | Schema.QuantitativeValue | Schema.StructuredValue;
  }
  return PropertyValueClass
}

class PropertyValueImpl extends PropertyValueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyValue>) {
    super(arg, init)
    this.types.add(schema.PropertyValue)
  }
}
PropertyValueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PropertyValue)
PropertyValueMixin.Class = PropertyValueImpl
