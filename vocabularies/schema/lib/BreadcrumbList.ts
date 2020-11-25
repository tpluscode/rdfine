import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ItemListMixin } from './ItemList';

export interface BreadcrumbList<ID extends ResourceNode = ResourceNode> extends Schema.ItemList<ID>, RdfResource<ID> {
}

export function BreadcrumbListMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BreadcrumbListClass extends ItemListMixin(Resource) implements BreadcrumbList {
  }
  return BreadcrumbListClass
}

class BreadcrumbListImpl extends BreadcrumbListMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BreadcrumbList>) {
    super(arg, init)
    this.types.add(schema.BreadcrumbList)
  }

  static readonly __mixins: Mixin[] = [BreadcrumbListMixin, ItemListMixin];
}
BreadcrumbListMixin.appliesTo = schema.BreadcrumbList
BreadcrumbListMixin.Class = BreadcrumbListImpl
