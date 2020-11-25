import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface ExchangeRateSpecification<ID extends ResourceNode = ResourceNode> extends Schema.StructuredValue<ID>, RdfResource<ID> {
  currency: string | undefined;
  currentExchangeRate: Schema.UnitPriceSpecification<SiblingNode<ID>> | undefined;
  exchangeRateSpread: Schema.MonetaryAmount<SiblingNode<ID>> | undefined;
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
