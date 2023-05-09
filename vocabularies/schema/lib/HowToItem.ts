import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ListItemMixin } from './ListItem.js';

export interface HowToItem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ListItem<D>, rdfine.RdfResource<D> {
  requiredQuantity: Schema.QuantitativeValue<D> | undefined;
  requiredQuantityLiteral: number | string | undefined;
}

export function HowToItemMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HowToItem> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HowToItemClass extends ListItemMixin(Resource) implements Partial<HowToItem> {
    @rdfine.property.resource()
    requiredQuantity: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.requiredQuantity })
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

export const fromPointer = createFactory<HowToItem>([ListItemMixin, HowToItemMixin], { types: [schema.HowToItem] });
