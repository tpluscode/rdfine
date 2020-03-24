import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ItemListMixin from './ItemList';

export interface BreadcrumbList extends Schema.ItemList, RdfResource {
}

export default function BreadcrumbListMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BreadcrumbListClass extends ItemListMixin(Resource) implements BreadcrumbList {
  }
  return BreadcrumbListClass
}

class BreadcrumbListImpl extends BreadcrumbListMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BreadcrumbList)
  }
}
BreadcrumbListMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BreadcrumbList)
BreadcrumbListMixin.Class = BreadcrumbListImpl
