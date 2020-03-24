import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkSeriesMixin from './CreativeWorkSeries';

export interface RadioSeries extends Schema.CreativeWorkSeries, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  containsSeason: Schema.CreativeWorkSeason;
  director: Schema.Person;
  directors: Schema.Person;
  episode: Schema.Episode;
  episodes: Schema.Episode;
  musicBy: Schema.MusicGroup | Schema.Person;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  productionCompany: Schema.Organization;
  season: Schema.CreativeWorkSeason;
  seasons: Schema.CreativeWorkSeason;
  trailer: Schema.VideoObject;
}

export default function RadioSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioSeriesClass extends CreativeWorkSeriesMixin(Resource) implements RadioSeries {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.resource()
    containsSeason!: Schema.CreativeWorkSeason;
    @property.resource()
    director!: Schema.Person;
    @property.resource()
    directors!: Schema.Person;
    @property.resource()
    episode!: Schema.Episode;
    @property.resource()
    episodes!: Schema.Episode;
    @property.resource()
    musicBy!: Schema.MusicGroup | Schema.Person;
    @property.literal({ type: Number })
    numberOfEpisodes!: number;
    @property.literal({ type: Number })
    numberOfSeasons!: number;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.resource()
    season!: Schema.CreativeWorkSeason;
    @property.resource()
    seasons!: Schema.CreativeWorkSeason;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return RadioSeriesClass
}

class RadioSeriesImpl extends RadioSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RadioSeries>) {
    super(arg)
    this.types.add(schema.RadioSeries)
    initializeProperties(this, init)
  }
}
RadioSeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioSeries)
RadioSeriesMixin.Class = RadioSeriesImpl
