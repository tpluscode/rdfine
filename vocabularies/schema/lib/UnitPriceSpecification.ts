import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PriceSpecificationMixin } from './PriceSpecification.js';

export interface UnitPriceSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PriceSpecification<D>, RdfResource<D> {
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

export function UnitPriceSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UnitPriceSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class UnitPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements Partial<UnitPriceSpecification> {
    @property.resource()
    billingDuration: Schema.Duration | Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.billingDuration, type: Number })
    billingDurationLiteral: number | undefined;
    @property.literal({ type: Number })
    billingIncrement: number | undefined;
    @property.literal({ type: Number })
    billingStart: number | undefined;
    @property()
    priceComponentType: Schema.PriceComponentTypeEnumeration | undefined;
    @property.literal()
    priceType: string | undefined;
    @property({ path: schema.priceType })
    priceTypeTerm: Schema.PriceTypeEnumeration | undefined;
    @property.resource()
    referenceQuantity: Schema.QuantitativeValue | undefined;
    @property.literal()
    unitCode: string | undefined;
    @property({ path: schema.unitCode })
    unitCodeTerm: RDF.NamedNode | undefined;
    @property.literal()
    unitText: string | undefined;
  }
  return UnitPriceSpecificationClass
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
