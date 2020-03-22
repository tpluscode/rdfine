import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MovieRentalStore)
  }
}
MovieRentalStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MovieRentalStore)
MovieRentalStoreMixin.Class = MovieRentalStoreImpl