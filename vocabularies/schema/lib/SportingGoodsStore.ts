import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface SportingGoodsStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function SportingGoodsStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SportingGoodsStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SportingGoodsStoreClass extends StoreMixin(Resource) implements Partial<SportingGoodsStore> {
  }
  return SportingGoodsStoreClass
}

class SportingGoodsStoreImpl extends SportingGoodsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SportingGoodsStore>) {
    super(arg, init)
    this.types.add(schema.SportingGoodsStore)
  }

  static readonly __mixins: Mixin[] = [SportingGoodsStoreMixin, StoreMixin];
}
SportingGoodsStoreMixin.appliesTo = schema.SportingGoodsStore
SportingGoodsStoreMixin.Class = SportingGoodsStoreImpl

export const fromPointer = createFactory<SportingGoodsStore>([StoreMixin, SportingGoodsStoreMixin], { types: [schema.SportingGoodsStore] });
