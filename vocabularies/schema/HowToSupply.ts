import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { HowToItemMixin } from './HowToItem';

export interface HowToSupply extends Schema.HowToItem, RdfResource {
  estimatedCost: Schema.MonetaryAmount;
  estimatedCostLiteral: string;
}

export function HowToSupplyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToSupplyClass extends HowToItemMixin(Resource) implements HowToSupply {
    @property.resource()
    estimatedCost!: Schema.MonetaryAmount;
    @property.literal({ path: schema.estimatedCost })
    estimatedCostLiteral!: string;
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
