import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface BikeStore extends Schema.Store, RdfResource {
}

export default function BikeStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BikeStoreClass extends StoreMixin(Resource) implements BikeStore {
  }
  return BikeStoreClass
}

class BikeStoreImpl extends BikeStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BikeStore>) {
    super(arg)
    this.types.add(schema.BikeStore)
    initializeProperties(this, init)
  }
}
BikeStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BikeStore)
BikeStoreMixin.Class = BikeStoreImpl
