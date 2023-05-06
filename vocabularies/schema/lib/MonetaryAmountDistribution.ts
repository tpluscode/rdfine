import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { QuantitativeValueDistributionMixin } from './QuantitativeValueDistribution.js';

export interface MonetaryAmountDistribution<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.QuantitativeValueDistribution<D>, RdfResource<D> {
  currency: string | undefined;
}

export function MonetaryAmountDistributionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MonetaryAmountDistribution> & RdfResourceCore> & Base {
  @namespace(schema)
  class MonetaryAmountDistributionClass extends QuantitativeValueDistributionMixin(Resource) implements Partial<MonetaryAmountDistribution> {
    @property.literal()
    currency: string | undefined;
  }
  return MonetaryAmountDistributionClass
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
