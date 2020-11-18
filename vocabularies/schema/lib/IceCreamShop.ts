import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface IceCreamShop<ID extends ResourceNode = ResourceNode> extends Schema.FoodEstablishment<ID>, RdfResource<ID> {
}

export function IceCreamShopMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [IceCreamShopMixin, FoodEstablishmentMixin];
}
IceCreamShopMixin.appliesTo = schema.IceCreamShop
IceCreamShopMixin.Class = IceCreamShopImpl
