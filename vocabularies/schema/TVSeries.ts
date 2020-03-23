import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import CreativeWorkSeriesMixin from './CreativeWorkSeries';

export interface TVSeries extends Schema.CreativeWork, Schema.CreativeWorkSeries, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  containsSeason: Schema.CreativeWorkSeason;
  countryOfOrigin: Schema.Country;
  director: Schema.Person;
  directors: Schema.Person;
  episode: Schema.Episode;
  episodes: Schema.Episode;
  musicBy: Schema.MusicGroup | Schema.Person;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  productionCompany: Schema.Organization;
  season: Schema.CreativeWorkSeason;
  seasonLiteral: string;
  seasons: Schema.CreativeWorkSeason;
  trailer: Schema.VideoObject;
}

export default function TVSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TVSeriesClass extends CreativeWorkSeriesMixin(CreativeWorkMixin(Resource)) implements TVSeries {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.resource()
    containsSeason!: Schema.CreativeWorkSeason;
    @property.resource()
    countryOfOrigin!: Schema.Country;
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
    @property.literal({ path: schema.season })
    seasonLiteral!: string;
    @property.resource()
    seasons!: Schema.CreativeWorkSeason;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return TVSeriesClass
}

class TVSeriesImpl extends TVSeriesMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TVSeries)
  }
}
TVSeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TVSeries)
TVSeriesMixin.Class = TVSeriesImpl
