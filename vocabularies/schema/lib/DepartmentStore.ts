import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface DepartmentStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function DepartmentStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DepartmentStore> & RdfResourceCore> & Base {
  @namespace(schema)
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
