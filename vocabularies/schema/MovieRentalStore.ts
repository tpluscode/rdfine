import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface MovieRentalStore extends Schema.Store, RdfResource {
}

export function MovieRentalStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieRentalStoreClass extends StoreMixin(Resource) implements MovieRentalStore {
  }
  return MovieRentalStoreClass
}

class MovieRentalStoreImpl extends MovieRentalStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovieRentalStore>) {
    super(arg, init)
    this.types.add(schema.MovieRentalStore)
  }

  static readonly __mixins: Mixin[] = [MovieRentalStoreMixin, StoreMixin];
}
MovieRentalStoreMixin.appliesTo = schema.MovieRentalStore
MovieRentalStoreMixin.Class = MovieRentalStoreImpl
