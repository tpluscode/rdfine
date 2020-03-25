import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface HobbyShop extends Schema.Store, RdfResource {
}

export default function HobbyShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HobbyShopClass extends StoreMixin(Resource) implements HobbyShop {
  }
  return HobbyShopClass
}

class HobbyShopImpl extends HobbyShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HobbyShop>) {
    super(arg)
    this.types.add(schema.HobbyShop)
    initializeProperties<HobbyShop>(this, init)
  }
}
HobbyShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HobbyShop)
HobbyShopMixin.Class = HobbyShopImpl
