import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface CafeOrCoffeeShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function CafeOrCoffeeShopMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CafeOrCoffeeShop> & RdfResourceCore> & Base {
  @namespace(schema)
  class CafeOrCoffeeShopClass extends FoodEstablishmentMixin(Resource) implements Partial<CafeOrCoffeeShop> {
  }
  return CafeOrCoffeeShopClass
}

class CafeOrCoffeeShopImpl extends CafeOrCoffeeShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CafeOrCoffeeShop>) {
    super(arg, init)
    this.types.add(schema.CafeOrCoffeeShop)
  }

  static readonly __mixins: Mixin[] = [CafeOrCoffeeShopMixin, FoodEstablishmentMixin];
}
CafeOrCoffeeShopMixin.appliesTo = schema.CafeOrCoffeeShop
CafeOrCoffeeShopMixin.Class = CafeOrCoffeeShopImpl

export const fromPointer = createFactory<CafeOrCoffeeShop>([FoodEstablishmentMixin, CafeOrCoffeeShopMixin], { types: [schema.CafeOrCoffeeShop] });
