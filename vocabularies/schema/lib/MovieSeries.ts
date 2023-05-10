import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries.js';

export interface MovieSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeries<D>, rdfine.RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  productionCompany: Schema.Organization<D> | undefined;
  trailer: Schema.VideoObject<D> | undefined;
}

export function MovieSeriesMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MovieSeries> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MovieSeriesClass extends CreativeWorkSeriesMixin(Resource) implements Partial<MovieSeries> {
    @rdfine.property.resource()
    actor: Schema.Person | undefined;
    @rdfine.property.resource()
    actors: Schema.Person | undefined;
    @rdfine.property.resource()
    director: Schema.Person | undefined;
    @rdfine.property.resource()
    directors: Schema.Person | undefined;
    @rdfine.property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @rdfine.property.resource()
    productionCompany: Schema.Organization | undefined;
    @rdfine.property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return MovieSeriesClass
}

class MovieSeriesImpl extends MovieSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovieSeries>) {
    super(arg, init)
    this.types.add(schema.MovieSeries)
  }

  static readonly __mixins: Mixin[] = [MovieSeriesMixin, CreativeWorkSeriesMixin];
}
MovieSeriesMixin.appliesTo = schema.MovieSeries
MovieSeriesMixin.Class = MovieSeriesImpl

export const fromPointer = createFactory<MovieSeries>([CreativeWorkSeriesMixin, MovieSeriesMixin], { types: [schema.MovieSeries] });
