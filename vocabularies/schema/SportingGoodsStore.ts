import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface SportingGoodsStore extends Schema.Store, RdfResource {
}

export default function SportingGoodsStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportingGoodsStoreClass extends StoreMixin(Resource) implements SportingGoodsStore {
  }
  return SportingGoodsStoreClass
}

class SportingGoodsStoreImpl extends SportingGoodsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SportingGoodsStore>) {
    super(arg)
    this.types.add(schema.SportingGoodsStore)
    initializeProperties(this, init)
  }
}
SportingGoodsStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportingGoodsStore)
SportingGoodsStoreMixin.Class = SportingGoodsStoreImpl
