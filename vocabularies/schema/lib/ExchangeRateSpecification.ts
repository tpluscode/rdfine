import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface ExchangeRateSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  currency: string | undefined;
  currentExchangeRate: Schema.UnitPriceSpecification<D> | undefined;
  exchangeRateSpread: Schema.MonetaryAmount<D> | undefined;
  exchangeRateSpreadLiteral: number | undefined;
}

export function ExchangeRateSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ExchangeRateSpecification & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ExchangeRateSpecificationClass extends StructuredValueMixin(Resource) {
    @rdfine.property.literal()
    currency: string | undefined;
    @rdfine.property.resource()
    currentExchangeRate: Schema.UnitPriceSpecification | undefined;
    @rdfine.property.resource()
    exchangeRateSpread: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ path: schema.exchangeRateSpread, type: Number })
    exchangeRateSpreadLiteral: number | undefined;
  }
  return ExchangeRateSpecificationClass as any
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
