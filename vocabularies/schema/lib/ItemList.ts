import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface ItemList<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  itemListElement: Array<Schema.ListItem<D> | Schema.Thing<D>>;
  itemListElementLiteral: Array<string>;
  itemListOrder: string | undefined;
  itemListOrderTerm: Schema.ItemListOrderType | undefined;
  numberOfItems: number | undefined;
}

export function ItemListMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ItemList & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ItemListClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource({ values: 'array' })
    itemListElement!: Array<Schema.ListItem | Schema.Thing>;
    @rdfine.property.literal({ path: schema.itemListElement, values: 'array' })
    itemListElementLiteral!: Array<string>;
    @rdfine.property.literal()
    itemListOrder: string | undefined;
    @rdfine.property({ path: schema.itemListOrder })
    itemListOrderTerm: Schema.ItemListOrderType | undefined;
    @rdfine.property.literal({ type: Number })
    numberOfItems: number | undefined;
  }
  return ItemListClass as any
}

class ItemListImpl extends ItemListMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ItemList>) {
    super(arg, init)
    this.types.add(schema.ItemList)
  }

  static readonly __mixins: Mixin[] = [ItemListMixin, IntangibleMixin];
}
ItemListMixin.appliesTo = schema.ItemList
ItemListMixin.Class = ItemListImpl

export const fromPointer = createFactory<ItemList>([IntangibleMixin, ItemListMixin], { types: [schema.ItemList] });
