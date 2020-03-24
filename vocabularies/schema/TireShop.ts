import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface TireShop extends Schema.Store, RdfResource {
}

export default function TireShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TireShopClass extends StoreMixin(Resource) implements TireShop {
  }
  return TireShopClass
}

class TireShopImpl extends TireShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TireShop>) {
    super(arg)
    this.types.add(schema.TireShop)
    initializeProperties(this, init)
  }
}
TireShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TireShop)
TireShopMixin.Class = TireShopImpl
