import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface ElectronicsStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function ElectronicsStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ElectronicsStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class ElectronicsStoreClass extends StoreMixin(Resource) implements Partial<ElectronicsStore> {
  }
  return ElectronicsStoreClass
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
