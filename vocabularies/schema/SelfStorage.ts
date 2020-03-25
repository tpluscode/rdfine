import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface SelfStorage extends Schema.LocalBusiness, RdfResource {
}

export default function SelfStorageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SelfStorageClass extends LocalBusinessMixin(Resource) implements SelfStorage {
  }
  return SelfStorageClass
}

class SelfStorageImpl extends SelfStorageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SelfStorage>) {
    super(arg)
    this.types.add(schema.SelfStorage)
    initializeProperties<SelfStorage>(this, init)
  }
}
SelfStorageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SelfStorage)
SelfStorageMixin.Class = SelfStorageImpl
