import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface UnitPriceSpecification extends Schema.PriceSpecification, RdfResource {
  billingIncrement: number;
  priceType: string;
  referenceQuantity: Schema.QuantitativeValue;
  unitCode: string;
  unitCodeTerm: RDF.NamedNode;
  unitText: string;
}

export function UnitPriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UnitPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements UnitPriceSpecification {
    @property.literal({ type: Number })
    billingIncrement!: number;
    @property.literal()
    priceType!: string;
    @property.resource()
    referenceQuantity!: Schema.QuantitativeValue;
    @property.literal()
    unitCode!: string;
    @property({ path: schema.unitCode })
    unitCodeTerm!: RDF.NamedNode;
    @property.literal()
    unitText!: string;
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
