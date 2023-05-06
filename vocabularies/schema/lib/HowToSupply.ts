import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HowToItemMixin } from './HowToItem.js';

export interface HowToSupply<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HowToItem<D>, RdfResource<D> {
  estimatedCost: Schema.MonetaryAmount<D> | undefined;
  estimatedCostLiteral: string | undefined;
}

export function HowToSupplyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HowToSupply> & RdfResourceCore> & Base {
  @namespace(schema)
  class HowToSupplyClass extends HowToItemMixin(Resource) implements Partial<HowToSupply> {
    @property.resource()
    estimatedCost: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.estimatedCost })
    estimatedCostLiteral: string | undefined;
  }
  return HowToSupplyClass
}

class HowToSupplyImpl extends HowToSupplyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToSupply>) {
    super(arg, init)
    this.types.add(schema.HowToSupply)
  }

  static readonly __mixins: Mixin[] = [HowToSupplyMixin, HowToItemMixin];
}
HowToSupplyMixin.appliesTo = schema.HowToSupply
HowToSupplyMixin.Class = HowToSupplyImpl

export const fromPointer = createFactory<HowToSupply>([HowToItemMixin, HowToSupplyMixin], { types: [schema.HowToSupply] });
