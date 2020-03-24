import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface HomeGoodsStore extends Schema.Store, RdfResource {
}

export default function HomeGoodsStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HomeGoodsStoreClass extends StoreMixin(Resource) implements HomeGoodsStore {
  }
  return HomeGoodsStoreClass
}

class HomeGoodsStoreImpl extends HomeGoodsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HomeGoodsStore>) {
    super(arg)
    this.types.add(schema.HomeGoodsStore)
    initializeProperties(this, init)
  }
}
HomeGoodsStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HomeGoodsStore)
HomeGoodsStoreMixin.Class = HomeGoodsStoreImpl
