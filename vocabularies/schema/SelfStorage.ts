import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SelfStorage)
  }
}
SelfStorageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SelfStorage)
SelfStorageMixin.Class = SelfStorageImpl
