import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ItemListMixin } from './ItemList';

export interface BreadcrumbList extends Schema.ItemList, RdfResource {
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
}
BreadcrumbListMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BreadcrumbList)
BreadcrumbListMixin.Class = BreadcrumbListImpl
