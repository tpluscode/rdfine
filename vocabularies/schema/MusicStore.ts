import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface MusicStore extends Schema.Store, RdfResource {
}

export default function MusicStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicStoreClass extends StoreMixin(Resource) implements MusicStore {
  }
  return MusicStoreClass
}

class MusicStoreImpl extends MusicStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MusicStore)
  }
}
MusicStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicStore)
MusicStoreMixin.Class = MusicStoreImpl
