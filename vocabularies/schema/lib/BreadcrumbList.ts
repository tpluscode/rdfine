import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ItemListMixin } from './ItemList';

export interface BreadcrumbList<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ItemList<D>, RdfResource<D> {
}

export function BreadcrumbListMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BreadcrumbList> & RdfResourceCore> & Base {
  @namespace(schema)
  class BreadcrumbListClass extends ItemListMixin(Resource) implements Partial<BreadcrumbList> {
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

export const fromPointer = createFactory<BreadcrumbList>([ItemListMixin, BreadcrumbListMixin], { types: [schema.BreadcrumbList] });
