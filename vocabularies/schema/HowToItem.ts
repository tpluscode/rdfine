import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ListItemMixin from './ListItem';

export interface HowToItem extends Schema.ListItem, RdfResource {
  requiredQuantity: Schema.QuantitativeValue;
  requiredQuantityLiteral: number | string;
}

export default function HowToItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToItemClass extends ListItemMixin(Resource) implements HowToItem {
    @property.resource()
    requiredQuantity!: Schema.QuantitativeValue;
    @property.literal({ path: schema.requiredQuantity })
    requiredQuantityLiteral!: number | string;
  }
  return HowToItemClass
}

class HowToItemImpl extends HowToItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HowToItem>) {
    super(arg)
    this.types.add(schema.HowToItem)
    initializeProperties(this, init)
  }
}
HowToItemMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToItem)
HowToItemMixin.Class = HowToItemImpl
