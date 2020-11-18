import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface ItemList<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  itemListElement: Array<Schema.ListItem<D> | Schema.Thing<D>>;
  itemListElementLiteral: Array<string>;
  itemListOrder: string | undefined;
  itemListOrderTerm: Schema.ItemListOrderType | undefined;
  numberOfItems: number | undefined;
}

export function ItemListMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ItemListClass extends IntangibleMixin(Resource) implements ItemList {
    @property.resource({ values: 'array' })
    itemListElement!: Array<Schema.ListItem | Schema.Thing>;
    @property.literal({ path: schema.itemListElement, values: 'array' })
    itemListElementLiteral!: Array<string>;
    @property.literal()
    itemListOrder: string | undefined;
    @property({ path: schema.itemListOrder })
    itemListOrderTerm: Schema.ItemListOrderType | undefined;
    @property.literal({ type: Number })
    numberOfItems: number | undefined;
  }
  return ItemListClass
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
