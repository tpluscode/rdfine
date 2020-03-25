import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface PriceSpecification extends Schema.StructuredValue, RdfResource {
  eligibleQuantity: Schema.QuantitativeValue;
  eligibleTransactionVolume: PriceSpecification;
  maxPrice: number;
  minPrice: number;
  price: number | string;
  priceCurrency: string;
  validFrom: Date | Date;
  validThrough: Date | Date;
  valueAddedTaxIncluded: boolean;
}

export default function PriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PriceSpecificationClass extends StructuredValueMixin(Resource) implements PriceSpecification {
    @property.resource()
    eligibleQuantity!: Schema.QuantitativeValue;
    @property.resource()
    eligibleTransactionVolume!: PriceSpecification;
    @property.literal({ type: Number })
    maxPrice!: number;
    @property.literal({ type: Number })
    minPrice!: number;
    @property.literal()
    price!: number | string;
    @property.literal()
    priceCurrency!: string;
    @property.literal()
    validFrom!: Date | Date;
    @property.literal()
    validThrough!: Date | Date;
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
}
PriceSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PriceSpecification)
PriceSpecificationMixin.Class = PriceSpecificationImpl
