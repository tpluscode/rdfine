import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface MobilePhoneStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function MobilePhoneStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MobilePhoneStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class MobilePhoneStoreClass extends StoreMixin(Resource) implements Partial<MobilePhoneStore> {
  }
  return MobilePhoneStoreClass
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
