import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface HobbyShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function HobbyShopMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HobbyShop> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HobbyShopClass extends StoreMixin(Resource) implements Partial<HobbyShop> {
  }
  return HobbyShopClass
}

class HobbyShopImpl extends HobbyShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HobbyShop>) {
    super(arg, init)
    this.types.add(schema.HobbyShop)
  }

  static readonly __mixins: Mixin[] = [HobbyShopMixin, StoreMixin];
}
HobbyShopMixin.appliesTo = schema.HobbyShop
HobbyShopMixin.Class = HobbyShopImpl

export const fromPointer = createFactory<HobbyShop>([StoreMixin, HobbyShopMixin], { types: [schema.HobbyShop] });
