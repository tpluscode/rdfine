import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface MonetaryAmount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  currency: string | undefined;
  maxValue: number | undefined;
  minValue: number | undefined;
  validFrom: Date | undefined;
  validThrough: Date | undefined;
  value: Schema.StructuredValue<D> | undefined;
  valueLiteral: boolean | number | string | undefined;
}

export function MonetaryAmountMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MonetaryAmount> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MonetaryAmountClass extends StructuredValueMixin(Resource) implements Partial<MonetaryAmount> {
    @rdfine.property.literal()
    currency: string | undefined;
    @rdfine.property.literal({ type: Number })
    maxValue: number | undefined;
    @rdfine.property.literal({ type: Number })
    minValue: number | undefined;
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom: Date | undefined;
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough: Date | undefined;
    @rdfine.property.resource()
    value: Schema.StructuredValue | undefined;
    @rdfine.property.literal({ path: schema.value })
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
