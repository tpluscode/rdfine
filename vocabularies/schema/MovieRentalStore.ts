import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface MovieRentalStore extends Schema.Store, RdfResource {
}

export default function MovieRentalStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieRentalStoreClass extends StoreMixin(Resource) implements MovieRentalStore {
  }
  return MovieRentalStoreClass
}

class MovieRentalStoreImpl extends MovieRentalStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MovieRentalStore>) {
    super(arg)
    this.types.add(schema.MovieRentalStore)
    initializeProperties(this, init)
  }
}
MovieRentalStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MovieRentalStore)
MovieRentalStoreMixin.Class = MovieRentalStoreImpl
