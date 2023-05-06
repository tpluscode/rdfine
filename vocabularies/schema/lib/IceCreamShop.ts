import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface IceCreamShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function IceCreamShopMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<IceCreamShop> & RdfResourceCore> & Base {
  @namespace(schema)
  class IceCreamShopClass extends FoodEstablishmentMixin(Resource) implements Partial<IceCreamShop> {
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

export const fromPointer = createFactory<IceCreamShop>([FoodEstablishmentMixin, IceCreamShopMixin], { types: [schema.IceCreamShop] });
