import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface UnitPriceSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PriceSpecification<D>, RdfResource<D> {
  billingIncrement: number | undefined;
  priceType: string | undefined;
  referenceQuantity: Schema.QuantitativeValue<D> | undefined;
  unitCode: string | undefined;
  unitCodeTerm: RDF.NamedNode | undefined;
  unitText: string | undefined;
}

export function UnitPriceSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UnitPriceSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class UnitPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements Partial<UnitPriceSpecification> {
    @property.literal({ type: Number })
    billingIncrement: number | undefined;
    @property.literal()
    priceType: string | undefined;
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
