import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface CafeOrCoffeeShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    CafeOrCoffeeShop: Factory<Schema.CafeOrCoffeeShop>;
  }
}

export function CafeOrCoffeeShopMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CafeOrCoffeeShop & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CafeOrCoffeeShopClass extends FoodEstablishmentMixin(Resource) {
  }
  return CafeOrCoffeeShopClass as any
}
CafeOrCoffeeShopMixin.appliesTo = schema.CafeOrCoffeeShop
CafeOrCoffeeShopMixin.createFactory = (env: RdfineEnvironment) => createFactory<CafeOrCoffeeShop>([FoodEstablishmentMixin, CafeOrCoffeeShopMixin], { types: [schema.CafeOrCoffeeShop] }, env)
