import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PriceSpecificationMixin } from './PriceSpecification.js';

export interface UnitPriceSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PriceSpecification<D>, rdfine.RdfResource<D> {
  billingDuration: Schema.Duration<D> | Schema.QuantitativeValue<D> | undefined;
  billingDurationLiteral: number | undefined;
  billingIncrement: number | undefined;
  billingStart: number | undefined;
  priceComponentType: Schema.PriceComponentTypeEnumeration | undefined;
  priceType: string | undefined;
  priceTypeTerm: Schema.PriceTypeEnumeration | undefined;
  referenceQuantity: Schema.QuantitativeValue<D> | undefined;
  unitCode: string | undefined;
  unitCodeTerm: RDF.NamedNode | undefined;
  unitText: string | undefined;
}

export function UnitPriceSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<UnitPriceSpecification & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UnitPriceSpecificationClass extends PriceSpecificationMixin(Resource) {
    @rdfine.property.resource()
    billingDuration: Schema.Duration | Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.billingDuration, type: Number })
    billingDurationLiteral: number | undefined;
    @rdfine.property.literal({ type: Number })
    billingIncrement: number | undefined;
    @rdfine.property.literal({ type: Number })
    billingStart: number | undefined;
    @rdfine.property()
    priceComponentType: Schema.PriceComponentTypeEnumeration | undefined;
    @rdfine.property.literal()
    priceType: string | undefined;
    @rdfine.property({ path: schema.priceType })
    priceTypeTerm: Schema.PriceTypeEnumeration | undefined;
    @rdfine.property.resource()
    referenceQuantity: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal()
    unitCode: string | undefined;
    @rdfine.property({ path: schema.unitCode })
    unitCodeTerm: RDF.NamedNode | undefined;
    @rdfine.property.literal()
    unitText: string | undefined;
  }
  return UnitPriceSpecificationClass as any
}

class UnitPriceSpecificationImpl extends UnitPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UnitPriceSpecification>) {
    super(arg, init)
    this.types.add(schema.UnitPriceSpecification)
  }

  static readonly __mixins: Mixin[] = [UnitPriceSpecificationMixin, PriceSpecificationMixin];
}
UnitPriceSpecificationMixin.appliesTo = schema.UnitPriceSpecification
UnitPriceSpecificationMixin.Class = UnitPriceSpecificationImpl

export const fromPointer = createFactory<UnitPriceSpecification>([PriceSpecificationMixin, UnitPriceSpecificationMixin], { types: [schema.UnitPriceSpecification] });
