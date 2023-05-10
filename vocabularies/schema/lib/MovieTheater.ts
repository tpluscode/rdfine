import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness.js';

export interface MovieTheater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.EntertainmentBusiness<D>, rdfine.RdfResource<D> {
  screenCount: number | undefined;
}

export function MovieTheaterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MovieTheater> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MovieTheaterClass extends EntertainmentBusinessMixin(CivicStructureMixin(Resource)) implements Partial<MovieTheater> {
    @rdfine.property.literal({ type: Number })
    screenCount: number | undefined;
  }
  return MovieTheaterClass
}

class MovieTheaterImpl extends MovieTheaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovieTheater>) {
    super(arg, init)
    this.types.add(schema.MovieTheater)
  }

  static readonly __mixins: Mixin[] = [MovieTheaterMixin, CivicStructureMixin, EntertainmentBusinessMixin];
}
MovieTheaterMixin.appliesTo = schema.MovieTheater
MovieTheaterMixin.Class = MovieTheaterImpl

export const fromPointer = createFactory<MovieTheater>([EntertainmentBusinessMixin, CivicStructureMixin, MovieTheaterMixin], { types: [schema.MovieTheater] });
