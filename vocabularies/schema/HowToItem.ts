import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HowToItem)
  }
}
HowToItemMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToItem)
HowToItemMixin.Class = HowToItemImpl
