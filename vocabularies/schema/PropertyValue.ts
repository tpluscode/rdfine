import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface PropertyValue extends Schema.StructuredValue, RdfResource {
  maxValue: number | undefined;
  minValue: number | undefined;
  propertyID: string | undefined;
  propertyIDTerm: RDF.NamedNode | undefined;
  unitCode: string | undefined;
  unitCodeTerm: RDF.NamedNode | undefined;
  unitText: string | undefined;
  value: Schema.StructuredValue | undefined;
  valueLiteral: boolean | number | string | undefined;
  valueReference: Schema.PropertyValue | Schema.QuantitativeValue | Schema.StructuredValue | undefined;
}

export function PropertyValueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PropertyValueClass extends StructuredValueMixin(Resource) implements PropertyValue {
    @property.literal({ type: Number })
    maxValue: number | undefined;
    @property.literal({ type: Number })
    minValue: number | undefined;
    @property.literal()
    propertyID: string | undefined;
    @property({ path: schema.propertyID })
    propertyIDTerm: RDF.NamedNode | undefined;
    @property.literal()
    unitCode: string | undefined;
    @property({ path: schema.unitCode })
    unitCodeTerm: RDF.NamedNode | undefined;
    @property.literal()
    unitText: string | undefined;
    @property.resource()
    value: Schema.StructuredValue | undefined;
    @property.literal({ path: schema.value })
    valueLiteral: boolean | number | string | undefined;
    @property.resource()
    valueReference: Schema.PropertyValue | Schema.QuantitativeValue | Schema.StructuredValue | undefined;
  }
  return PropertyValueClass
}

class PropertyValueImpl extends PropertyValueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyValue>) {
    super(arg, init)
    this.types.add(schema.PropertyValue)
  }

  static readonly __mixins: Mixin[] = [PropertyValueMixin, StructuredValueMixin];
}
PropertyValueMixin.appliesTo = schema.PropertyValue
PropertyValueMixin.Class = PropertyValueImpl
