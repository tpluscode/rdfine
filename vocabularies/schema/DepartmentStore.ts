import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface DepartmentStore extends Schema.Store, RdfResource {
}

export function DepartmentStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DepartmentStoreClass extends StoreMixin(Resource) implements DepartmentStore {
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
