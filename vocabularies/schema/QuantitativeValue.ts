import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface QuantitativeValue extends Schema.StructuredValue, RdfResource {
  additionalProperty: Schema.PropertyValue;
  maxValue: number;
  minValue: number;
  unitCode: string;
  unitCodeTerm: RDF.NamedNode;
  unitText: string;
  value: Schema.StructuredValue;
  valueLiteral: boolean | number | string;
  valueReference: Schema.PropertyValue | Schema.QuantitativeValue | Schema.StructuredValue;
}

export function QuantitativeValueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuantitativeValueClass extends StructuredValueMixin(Resource) implements QuantitativeValue {
    @property.resource()
    additionalProperty!: Schema.PropertyValue;
    @property.literal({ type: Number })
    maxValue!: number;
    @property.literal({ type: Number })
    minValue!: number;
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
  return QuantitativeValueClass
}

class QuantitativeValueImpl extends QuantitativeValueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<QuantitativeValue>) {
    super(arg, init)
    this.types.add(schema.QuantitativeValue)
  }

  static readonly __mixins: Mixin[] = [QuantitativeValueMixin, StructuredValueMixin];
}
QuantitativeValueMixin.appliesTo = schema.QuantitativeValue
QuantitativeValueMixin.Class = QuantitativeValueImpl
