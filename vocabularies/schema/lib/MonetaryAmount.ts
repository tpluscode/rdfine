import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface MonetaryAmount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  currency: string | undefined;
  maxValue: number | undefined;
  minValue: number | undefined;
  validFrom: Date | undefined;
  validThrough: Date | undefined;
  value: Schema.StructuredValue<D> | undefined;
  valueLiteral: boolean | number | string | undefined;
}

export function MonetaryAmountMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MonetaryAmount> & RdfResourceCore> & Base {
  @namespace(schema)
  class MonetaryAmountClass extends StructuredValueMixin(Resource) implements Partial<MonetaryAmount> {
    @property.literal()
    currency: string | undefined;
    @property.literal({ type: Number })
    maxValue: number | undefined;
    @property.literal({ type: Number })
    minValue: number | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough: Date | undefined;
    @property.resource()
    value: Schema.StructuredValue | undefined;
    @property.literal({ path: schema.value })
    valueLiteral: boolean | number | string | undefined;
  }
  return MonetaryAmountClass
}

class MonetaryAmountImpl extends MonetaryAmountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MonetaryAmount>) {
    super(arg, init)
    this.types.add(schema.MonetaryAmount)
  }

  static readonly __mixins: Mixin[] = [MonetaryAmountMixin, StructuredValueMixin];
}
MonetaryAmountMixin.appliesTo = schema.MonetaryAmount
MonetaryAmountMixin.Class = MonetaryAmountImpl

export const fromPointer = createFactory<MonetaryAmount>([StructuredValueMixin, MonetaryAmountMixin], { types: [schema.MonetaryAmount] });
