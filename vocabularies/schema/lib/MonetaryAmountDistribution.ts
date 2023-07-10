import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { QuantitativeValueDistributionMixin } from './QuantitativeValueDistribution.js';

export interface MonetaryAmountDistribution<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.QuantitativeValueDistribution<D>, rdfine.RdfResource<D> {
  currency: string | undefined;
}

export function MonetaryAmountDistributionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MonetaryAmountDistribution & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MonetaryAmountDistributionClass extends QuantitativeValueDistributionMixin(Resource) {
    @rdfine.property.literal()
    currency: string | undefined;
  }
  return MonetaryAmountDistributionClass as any
}

class MonetaryAmountDistributionImpl extends MonetaryAmountDistributionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MonetaryAmountDistribution>) {
    super(arg, init)
    this.types.add(schema.MonetaryAmountDistribution)
  }

  static readonly __mixins: Mixin[] = [MonetaryAmountDistributionMixin, QuantitativeValueDistributionMixin];
}
MonetaryAmountDistributionMixin.appliesTo = schema.MonetaryAmountDistribution
MonetaryAmountDistributionMixin.Class = MonetaryAmountDistributionImpl

export const fromPointer = createFactory<MonetaryAmountDistribution>([QuantitativeValueDistributionMixin, MonetaryAmountDistributionMixin], { types: [schema.MonetaryAmountDistribution] });
