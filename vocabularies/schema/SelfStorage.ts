import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<SelfStorage>) {
    super(arg, init)
    this.types.add(schema.SelfStorage)
  }
}
SelfStorageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SelfStorage)
SelfStorageMixin.Class = SelfStorageImpl
