import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AutoPartsStore>) {
    super(arg, init)
    this.types.add(schema.AutoPartsStore)
  }
}
AutoPartsStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoPartsStore)
AutoPartsStoreMixin.Class = AutoPartsStoreImpl
