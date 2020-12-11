import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface CompoundPriceSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PriceSpecification<D>, RdfResource<D> {
  priceComponent: Schema.UnitPriceSpecification<D> | undefined;
}

export function CompoundPriceSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<CompoundPriceSpecification> & Base {
  @namespace(schema)
  class CompoundPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements Partial<CompoundPriceSpecification> {
    @property.resource()
    priceComponent: Schema.UnitPriceSpecification | undefined;
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
