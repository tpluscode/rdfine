import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface MobilePhoneStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    MobilePhoneStore: Factory<Schema.MobilePhoneStore>;
  }
}

export function MobilePhoneStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MobilePhoneStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MobilePhoneStoreClass extends StoreMixin(Resource) {
  }
  return MobilePhoneStoreClass as any
}
MobilePhoneStoreMixin.appliesTo = schema.MobilePhoneStore
MobilePhoneStoreMixin.createFactory = (env: RdfineEnvironment) => createFactory<MobilePhoneStore>([StoreMixin, MobilePhoneStoreMixin], { types: [schema.MobilePhoneStore] }, env)
