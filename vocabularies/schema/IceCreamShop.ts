import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface IceCreamShop extends Schema.FoodEstablishment, RdfResource {
}

export default function IceCreamShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class IceCreamShopClass extends FoodEstablishmentMixin(Resource) implements IceCreamShop {
  }
  return IceCreamShopClass
}

class IceCreamShopImpl extends IceCreamShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<IceCreamShop>) {
    super(arg)
    this.types.add(schema.IceCreamShop)
    initializeProperties(this, init)
  }
}
IceCreamShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.IceCreamShop)
IceCreamShopMixin.Class = IceCreamShopImpl
