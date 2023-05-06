import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface MovieRentalStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function MovieRentalStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MovieRentalStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class MovieRentalStoreClass extends StoreMixin(Resource) implements Partial<MovieRentalStore> {
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

export const fromPointer = createFactory<MovieRentalStore>([StoreMixin, MovieRentalStoreMixin], { types: [schema.MovieRentalStore] });
