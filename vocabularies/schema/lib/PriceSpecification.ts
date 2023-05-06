import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

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

export function PriceSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PriceSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class PriceSpecificationClass extends StructuredValueMixin(Resource) implements Partial<PriceSpecification> {
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

export const fromPointer = createFactory<PriceSpecification>([StructuredValueMixin, PriceSpecificationMixin], { types: [schema.PriceSpecification] });
