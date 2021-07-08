import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface CompoundPriceSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PriceSpecification<D>, RdfResource<D> {
  priceComponent: Schema.UnitPriceSpecification<D> | undefined;
  priceType: string | undefined;
  priceTypeTerm: Schema.PriceTypeEnumeration | undefined;
}

export function CompoundPriceSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CompoundPriceSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class CompoundPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements Partial<CompoundPriceSpecification> {
    @property.resource()
    priceComponent: Schema.UnitPriceSpecification | undefined;
    @property.literal()
    priceType: string | undefined;
    @property({ path: schema.priceType })
    priceTypeTerm: Schema.PriceTypeEnumeration | undefined;
  }
  return CompoundPriceSpecificationClass
}

class CompoundPriceSpecificationImpl extends CompoundPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CompoundPriceSpecification>) {
    super(arg, init)
    this.types.add(schema.CompoundPriceSpecification)
  }

  static readonly __mixins: Mixin[] = [CompoundPriceSpecificationMixin, PriceSpecificationMixin];
}
CompoundPriceSpecificationMixin.appliesTo = schema.CompoundPriceSpecification
CompoundPriceSpecificationMixin.Class = CompoundPriceSpecificationImpl

export const fromPointer = createFactory<CompoundPriceSpecification>([PriceSpecificationMixin, CompoundPriceSpecificationMixin], { types: [schema.CompoundPriceSpecification] });
