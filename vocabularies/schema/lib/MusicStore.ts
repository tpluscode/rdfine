import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface MusicStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function MusicStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MusicStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MusicStoreClass extends StoreMixin(Resource) implements Partial<MusicStore> {
  }
  return MusicStoreClass
}

class MusicStoreImpl extends MusicStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicStore>) {
    super(arg, init)
    this.types.add(schema.MusicStore)
  }

  static readonly __mixins: Mixin[] = [MusicStoreMixin, StoreMixin];
}
MusicStoreMixin.appliesTo = schema.MusicStore
MusicStoreMixin.Class = MusicStoreImpl

export const fromPointer = createFactory<MusicStore>([StoreMixin, MusicStoreMixin], { types: [schema.MusicStore] });
