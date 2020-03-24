import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkSeriesMixin from './CreativeWorkSeries';

export interface MovieSeries extends Schema.CreativeWorkSeries, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  director: Schema.Person;
  directors: Schema.Person;
  musicBy: Schema.MusicGroup | Schema.Person;
  productionCompany: Schema.Organization;
  trailer: Schema.VideoObject;
}

export default function MovieSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieSeriesClass extends CreativeWorkSeriesMixin(Resource) implements MovieSeries {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.resource()
    director!: Schema.Person;
    @property.resource()
    directors!: Schema.Person;
    @property.resource()
    musicBy!: Schema.MusicGroup | Schema.Person;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return MovieSeriesClass
}

class MovieSeriesImpl extends MovieSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MovieSeries>) {
    super(arg)
    this.types.add(schema.MovieSeries)
    initializeProperties(this, init)
  }
}
MovieSeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MovieSeries)
MovieSeriesMixin.Class = MovieSeriesImpl
