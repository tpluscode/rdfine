import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface SportingGoodsStore extends Schema.Store, RdfResource {
}

export default function SportingGoodsStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportingGoodsStoreClass extends StoreMixin(Resource) implements SportingGoodsStore {
  }
  return SportingGoodsStoreClass
}

class SportingGoodsStoreImpl extends SportingGoodsStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SportingGoodsStore)
  }
}
SportingGoodsStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportingGoodsStore)
SportingGoodsStoreMixin.Class = SportingGoodsStoreImpl
