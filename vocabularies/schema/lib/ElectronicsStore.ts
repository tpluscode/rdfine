import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface ElectronicsStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function ElectronicsStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ElectronicsStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ElectronicsStoreClass extends StoreMixin(Resource) {
  }
  return ElectronicsStoreClass as any
}

class ElectronicsStoreImpl extends ElectronicsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ElectronicsStore>) {
    super(arg, init)
    this.types.add(schema.ElectronicsStore)
  }

  static readonly __mixins: Mixin[] = [ElectronicsStoreMixin, StoreMixin];
}
ElectronicsStoreMixin.appliesTo = schema.ElectronicsStore
ElectronicsStoreMixin.Class = ElectronicsStoreImpl

export const fromPointer = createFactory<ElectronicsStore>([StoreMixin, ElectronicsStoreMixin], { types: [schema.ElectronicsStore] });
