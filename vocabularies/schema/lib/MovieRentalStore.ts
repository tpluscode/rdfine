import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface MovieRentalStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function MovieRentalStoreMixin<Base extends Constructor>(Resource: Base): Constructor<MovieRentalStore> & Base {
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
