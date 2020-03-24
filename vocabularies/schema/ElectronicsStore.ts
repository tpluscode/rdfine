import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ElectronicsStore extends Schema.Store, RdfResource {
}

export default function ElectronicsStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElectronicsStoreClass extends StoreMixin(Resource) implements ElectronicsStore {
  }
  return ElectronicsStoreClass
}

class ElectronicsStoreImpl extends ElectronicsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ElectronicsStore>) {
    super(arg)
    this.types.add(schema.ElectronicsStore)
    initializeProperties(this, init)
  }
}
ElectronicsStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ElectronicsStore)
ElectronicsStoreMixin.Class = ElectronicsStoreImpl
