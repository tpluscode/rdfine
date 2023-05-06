import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface PropertyValue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  maxValue: number | undefined;
  measurementTechnique: string | undefined;
  measurementTechniqueTerm: RDF.NamedNode | undefined;
  minValue: number | undefined;
  propertyID: string | undefined;
  propertyIDTerm: RDF.NamedNode | undefined;
  unitCode: string | undefined;
  unitCodeTerm: RDF.NamedNode | undefined;
  unitText: string | undefined;
  value: Schema.StructuredValue<D> | undefined;
  valueLiteral: boolean | number | string | undefined;
  valueReference: Schema.PropertyValue<D> | Schema.QuantitativeValue<D> | Schema.StructuredValue<D> | undefined;
  valueReferenceLiteral: string | undefined;
}

export function PropertyValueMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PropertyValue> & RdfResourceCore> & Base {
  @namespace(schema)
  class PropertyValueClass extends StructuredValueMixin(Resource) implements Partial<PropertyValue> {
    @property.literal({ type: Number })
    maxValue: number | undefined;
    @property.literal()
    measurementTechnique: string | undefined;
    @property({ path: schema.measurementTechnique })
    measurementTechniqueTerm: RDF.NamedNode | undefined;
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
    @property.literal({ path: schema.valueReference })
    valueReferenceLiteral: string | undefined;
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

export const fromPointer = createFactory<PropertyValue>([StructuredValueMixin, PropertyValueMixin], { types: [schema.PropertyValue] });
