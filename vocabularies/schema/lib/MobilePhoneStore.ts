import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface MobilePhoneStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function MobilePhoneStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MobilePhoneStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MobilePhoneStoreClass extends StoreMixin(Resource) {
  }
  return MobilePhoneStoreClass as any
}

class MobilePhoneStoreImpl extends MobilePhoneStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MobilePhoneStore>) {
    super(arg, init)
    this.types.add(schema.MobilePhoneStore)
  }

  static readonly __mixins: Mixin[] = [MobilePhoneStoreMixin, StoreMixin];
}
MobilePhoneStoreMixin.appliesTo = schema.MobilePhoneStore
MobilePhoneStoreMixin.Class = MobilePhoneStoreImpl

export const fromPointer = createFactory<MobilePhoneStore>([StoreMixin, MobilePhoneStoreMixin], { types: [schema.MobilePhoneStore] });
