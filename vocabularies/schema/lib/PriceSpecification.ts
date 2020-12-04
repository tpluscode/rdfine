import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface PriceSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  eligibleQuantity: Schema.QuantitativeValue<D> | undefined;
  eligibleTransactionVolume: Schema.PriceSpecification<D> | undefined;
  maxPrice: number | undefined;
  minPrice: number | undefined;
  price: number | string | undefined;
  priceCurrency: string | undefined;
  validFrom: Date | undefined;
  validThrough: Date | undefined;
  valueAddedTaxIncluded: boolean | undefined;
}

export function PriceSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<PriceSpecification> & Base {
  @namespace(schema)
  class PriceSpecificationClass extends StructuredValueMixin(Resource) implements PriceSpecification {
    @property.resource()
    eligibleQuantity: Schema.QuantitativeValue | undefined;
    @property.resource()
    eligibleTransactionVolume: Schema.PriceSpecification | undefined;
    @property.literal({ type: Number })
    maxPrice: number | undefined;
    @property.literal({ type: Number })
    minPrice: number | undefined;
    @property.literal()
    price: number | string | undefined;
    @property.literal()
    priceCurrency: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough: Date | undefined;
    @property.literal({ type: Boolean })
    valueAddedTaxIncluded: boolean | undefined;
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
