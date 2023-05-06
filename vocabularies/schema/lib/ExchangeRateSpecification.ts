import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface ExchangeRateSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  currency: string | undefined;
  currentExchangeRate: Schema.UnitPriceSpecification<D> | undefined;
  exchangeRateSpread: Schema.MonetaryAmount<D> | undefined;
  exchangeRateSpreadLiteral: number | undefined;
}

export function ExchangeRateSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ExchangeRateSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class ExchangeRateSpecificationClass extends StructuredValueMixin(Resource) implements Partial<ExchangeRateSpecification> {
    @property.literal()
    currency: string | undefined;
    @property.resource()
    currentExchangeRate: Schema.UnitPriceSpecification | undefined;
    @property.resource()
    exchangeRateSpread: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.exchangeRateSpread, type: Number })
    exchangeRateSpreadLiteral: number | undefined;
  }
  return ExchangeRateSpecificationClass
}

class ExchangeRateSpecificationImpl extends ExchangeRateSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ExchangeRateSpecification>) {
    super(arg, init)
    this.types.add(schema.ExchangeRateSpecification)
  }

  static readonly __mixins: Mixin[] = [ExchangeRateSpecificationMixin, StructuredValueMixin];
}
ExchangeRateSpecificationMixin.appliesTo = schema.ExchangeRateSpecification
ExchangeRateSpecificationMixin.Class = ExchangeRateSpecificationImpl

export const fromPointer = createFactory<ExchangeRateSpecification>([StructuredValueMixin, ExchangeRateSpecificationMixin], { types: [schema.ExchangeRateSpecification] });
