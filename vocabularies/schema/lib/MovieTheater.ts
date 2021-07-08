import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';
import { CivicStructureMixin } from './CivicStructure';

export interface MovieTheater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, Schema.CivicStructure<D>, RdfResource<D> {
  screenCount: number | undefined;
}

export function MovieTheaterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MovieTheater> & RdfResourceCore> & Base {
  @namespace(schema)
  class MovieTheaterClass extends CivicStructureMixin(EntertainmentBusinessMixin(Resource)) implements Partial<MovieTheater> {
    @property.literal({ type: Number })
    screenCount: number | undefined;
  }
  return MovieTheaterClass
}

class MovieTheaterImpl extends MovieTheaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovieTheater>) {
    super(arg, init)
    this.types.add(schema.MovieTheater)
  }

  static readonly __mixins: Mixin[] = [MovieTheaterMixin, EntertainmentBusinessMixin, CivicStructureMixin];
}
MovieTheaterMixin.appliesTo = schema.MovieTheater
MovieTheaterMixin.Class = MovieTheaterImpl

export const fromPointer = createFactory<MovieTheater>([CivicStructureMixin, EntertainmentBusinessMixin, MovieTheaterMixin], { types: [schema.MovieTheater] });
