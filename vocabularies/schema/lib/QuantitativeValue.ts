import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface QuantitativeValue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  additionalProperty: Schema.PropertyValue<D> | undefined;
  maxValue: number | undefined;
  minValue: number | undefined;
  unitCode: string | undefined;
  unitCodeTerm: RDF.NamedNode | undefined;
  unitText: string | undefined;
  value: Schema.StructuredValue<D> | undefined;
  valueLiteral: boolean | number | string | undefined;
  valueReference: Schema.PropertyValue<D> | Schema.QuantitativeValue<D> | Schema.StructuredValue<D> | undefined;
  valueReferenceLiteral: string | undefined;
}

export function QuantitativeValueMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<QuantitativeValue> & RdfResourceCore> & Base {
  @namespace(schema)
  class QuantitativeValueClass extends StructuredValueMixin(Resource) implements Partial<QuantitativeValue> {
    @property.resource()
    additionalProperty: Schema.PropertyValue | undefined;
    @property.literal({ type: Number })
    maxValue: number | undefined;
    @property.literal({ type: Number })
    minValue: number | undefined;
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

export const fromPointer = createFactory<QuantitativeValue>([StructuredValueMixin, QuantitativeValueMixin], { types: [schema.QuantitativeValue] });
