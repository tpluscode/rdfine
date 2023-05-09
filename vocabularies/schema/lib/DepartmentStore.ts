import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface DepartmentStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function DepartmentStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DepartmentStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DepartmentStoreClass extends StoreMixin(Resource) implements Partial<DepartmentStore> {
  }
  return DepartmentStoreClass
}

class DepartmentStoreImpl extends DepartmentStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DepartmentStore>) {
    super(arg, init)
    this.types.add(schema.DepartmentStore)
  }

  static readonly __mixins: Mixin[] = [DepartmentStoreMixin, StoreMixin];
}
DepartmentStoreMixin.appliesTo = schema.DepartmentStore
DepartmentStoreMixin.Class = DepartmentStoreImpl

export const fromPointer = createFactory<DepartmentStore>([StoreMixin, DepartmentStoreMixin], { types: [schema.DepartmentStore] });
