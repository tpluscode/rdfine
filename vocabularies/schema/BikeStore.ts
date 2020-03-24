import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface BikeStore extends Schema.Store, RdfResource {
}

export default function BikeStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BikeStoreClass extends StoreMixin(Resource) implements BikeStore {
  }
  return BikeStoreClass
}

class BikeStoreImpl extends BikeStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BikeStore)
  }
}
BikeStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BikeStore)
BikeStoreMixin.Class = BikeStoreImpl
