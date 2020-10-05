import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface HomeGoodsStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function HomeGoodsStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HomeGoodsStoreClass extends StoreMixin(Resource) implements HomeGoodsStore {
  }
  return HomeGoodsStoreClass
}

class HomeGoodsStoreImpl extends HomeGoodsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HomeGoodsStore>) {
    super(arg, init)
    this.types.add(schema.HomeGoodsStore)
  }

  static readonly __mixins: Mixin[] = [HomeGoodsStoreMixin, StoreMixin];
}
HomeGoodsStoreMixin.appliesTo = schema.HomeGoodsStore
HomeGoodsStoreMixin.Class = HomeGoodsStoreImpl
