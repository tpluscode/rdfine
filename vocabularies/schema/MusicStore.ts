import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<MusicStore>) {
    super(arg)
    this.types.add(schema.MusicStore)
    initializeProperties(this, init)
  }
}
MusicStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicStore)
MusicStoreMixin.Class = MusicStoreImpl
