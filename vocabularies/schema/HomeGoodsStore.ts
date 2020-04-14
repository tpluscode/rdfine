import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<HomeGoodsStore>) {
    super(arg, init)
    this.types.add(schema.HomeGoodsStore)
  }
}
HomeGoodsStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HomeGoodsStore)
HomeGoodsStoreMixin.Class = HomeGoodsStoreImpl
