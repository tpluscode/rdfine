import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<IceCreamShop>) {
    super(arg, init)
    this.types.add(schema.IceCreamShop)
  }
}
IceCreamShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.IceCreamShop)
IceCreamShopMixin.Class = IceCreamShopImpl
