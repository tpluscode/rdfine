import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface ExchangeRateSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  currency: string | undefined;
  currentExchangeRate: Schema.UnitPriceSpecification<D> | undefined;
  exchangeRateSpread: Schema.MonetaryAmount<D> | undefined;
  exchangeRateSpreadLiteral: number | undefined;
}

export function ExchangeRateSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ExchangeRateSpecificationClass extends StructuredValueMixin(Resource) implements ExchangeRateSpecification {
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
