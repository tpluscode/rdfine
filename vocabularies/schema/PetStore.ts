import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface PetStore extends Schema.Store, RdfResource {
}

export default function PetStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PetStoreClass extends StoreMixin(Resource) implements PetStore {
  }
  return PetStoreClass
}

class PetStoreImpl extends PetStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PetStore>) {
    super(arg)
    this.types.add(schema.PetStore)
    initializeProperties<PetStore>(this, init)
  }
}
PetStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PetStore)
PetStoreMixin.Class = PetStoreImpl
