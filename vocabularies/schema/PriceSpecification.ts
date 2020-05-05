import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface PriceSpecification extends Schema.StructuredValue, RdfResource {
  eligibleQuantity: Schema.QuantitativeValue;
  eligibleTransactionVolume: Schema.PriceSpecification;
  maxPrice: number;
  minPrice: number;
  price: number | string;
  priceCurrency: string;
  validFrom: Date;
  validThrough: Date;
  valueAddedTaxIncluded: boolean;
}

export function PriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PriceSpecificationClass extends StructuredValueMixin(Resource) implements PriceSpecification {
    @property.resource()
    eligibleQuantity!: Schema.QuantitativeValue;
    @property.resource()
    eligibleTransactionVolume!: Schema.PriceSpecification;
    @property.literal({ type: Number })
    maxPrice!: number;
    @property.literal({ type: Number })
    minPrice!: number;
    @property.literal()
    price!: number | string;
    @property.literal()
    priceCurrency!: string;
    @property.literal()
    validFrom!: Date;
    @property.literal()
    validThrough!: Date;
    @property.literal({ type: Boolean })
    valueAddedTaxIncluded!: boolean;
  }
  return PriceSpecificationClass
}

class PriceSpecificationImpl extends PriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PriceSpecification>) {
    super(arg, init)
    this.types.add(schema.PriceSpecification)
  }

  static readonly __mixins: Mixin[] = [PriceSpecificationMixin, StructuredValueMixin];
}
PriceSpecificationMixin.appliesTo = schema.PriceSpecification
PriceSpecificationMixin.Class = PriceSpecificationImpl
