import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ListItemMixin } from './ListItem';

export interface HowToItem<ID extends ResourceNode = ResourceNode> extends Schema.ListItem<ID>, RdfResource<ID> {
  requiredQuantity: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  requiredQuantityLiteral: number | string | undefined;
}

export function HowToItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToItemClass extends ListItemMixin(Resource) implements HowToItem {
    @property.resource()
    requiredQuantity: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.requiredQuantity })
    requiredQuantityLiteral: number | string | undefined;
  }
  return HowToItemClass
}

class HowToItemImpl extends HowToItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToItem>) {
    super(arg, init)
    this.types.add(schema.HowToItem)
  }

  static readonly __mixins: Mixin[] = [HowToItemMixin, ListItemMixin];
}
HowToItemMixin.appliesTo = schema.HowToItem
HowToItemMixin.Class = HowToItemImpl
