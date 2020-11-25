import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface ItemPage<ID extends ResourceNode = ResourceNode> extends Schema.WebPage<ID>, RdfResource<ID> {
}

export function ItemPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ItemPageClass extends WebPageMixin(Resource) implements ItemPage {
  }
  return ItemPageClass
}

class ItemPageImpl extends ItemPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ItemPage>) {
    super(arg, init)
    this.types.add(schema.ItemPage)
  }

  static readonly __mixins: Mixin[] = [ItemPageMixin, WebPageMixin];
}
ItemPageMixin.appliesTo = schema.ItemPage
ItemPageMixin.Class = ItemPageImpl
