import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';
import StoreMixin from './Store';

export interface AutoPartsStore extends Schema.AutomotiveBusiness, Schema.Store, RdfResource {
}

export default function AutoPartsStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutoPartsStoreClass extends StoreMixin(AutomotiveBusinessMixin(Resource)) implements AutoPartsStore {
  }
  return AutoPartsStoreClass
}

class AutoPartsStoreImpl extends AutoPartsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AutoPartsStore>) {
    super(arg)
    this.types.add(schema.AutoPartsStore)
    initializeProperties(this, init)
  }
}
AutoPartsStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoPartsStore)
AutoPartsStoreMixin.Class = AutoPartsStoreImpl
