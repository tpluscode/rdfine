import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface HardwareStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function HardwareStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<HardwareStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HardwareStoreClass extends StoreMixin(Resource) {
  }
  return HardwareStoreClass as any
}

class HardwareStoreImpl extends HardwareStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HardwareStore>) {
    super(arg, init)
    this.types.add(schema.HardwareStore)
  }

  static readonly __mixins: Mixin[] = [HardwareStoreMixin, StoreMixin];
}
HardwareStoreMixin.appliesTo = schema.HardwareStore
HardwareStoreMixin.Class = HardwareStoreImpl

export const fromPointer = createFactory<HardwareStore>([StoreMixin, HardwareStoreMixin], { types: [schema.HardwareStore] });
