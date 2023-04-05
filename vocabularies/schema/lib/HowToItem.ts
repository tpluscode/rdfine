import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ListItemMixin } from './ListItem.js';

export interface HowToItem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ListItem<D>, RdfResource<D> {
  requiredQuantity: Schema.QuantitativeValue<D> | undefined;
  requiredQuantityLiteral: number | string | undefined;
}

export function HowToItemMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HowToItem> & RdfResourceCore> & Base {
  @namespace(schema)
  class HowToItemClass extends ListItemMixin(Resource) implements Partial<HowToItem> {
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

export const fromPointer = createFactory<HowToItem>([ListItemMixin, HowToItemMixin], { types: [schema.HowToItem] });
