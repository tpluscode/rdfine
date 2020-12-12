import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface SportingGoodsStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function SportingGoodsStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SportingGoodsStore> & RdfResourceCore> & Base {
  @namespace(schema)
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
