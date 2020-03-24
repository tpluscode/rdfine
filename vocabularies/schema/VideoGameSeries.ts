import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkSeriesMixin from './CreativeWorkSeries';

export interface VideoGameSeries extends Schema.CreativeWorkSeries, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  characterAttribute: Schema.Thing;
  cheatCode: Schema.CreativeWork;
  containsSeason: Schema.CreativeWorkSeason;
  director: Schema.Person;
  directors: Schema.Person;
  episode: Schema.Episode;
  episodes: Schema.Episode;
  gameItem: Schema.Thing;
  gameLocation: Schema.Place | Schema.PostalAddress;
  gamePlatform: Schema.Thing;
  gamePlatformLiteral: string;
  musicBy: Schema.MusicGroup | Schema.Person;
  numberOfEpisodes: number;
  numberOfPlayers: Schema.QuantitativeValue;
  numberOfSeasons: number;
  playMode: Schema.GamePlayMode;
  productionCompany: Schema.Organization;
  quest: Schema.Thing;
  season: Schema.CreativeWorkSeason;
  seasons: Schema.CreativeWorkSeason;
  trailer: Schema.VideoObject;
}

export default function VideoGameSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VideoGameSeriesClass extends CreativeWorkSeriesMixin(Resource) implements VideoGameSeries {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.resource()
    characterAttribute!: Schema.Thing;
    @property.resource()
    cheatCode!: Schema.CreativeWork;
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
    gameItem!: Schema.Thing;
    @property.resource()
    gameLocation!: Schema.Place | Schema.PostalAddress;
    @property.resource()
    gamePlatform!: Schema.Thing;
    @property.literal({ path: schema.gamePlatform })
    gamePlatformLiteral!: string;
    @property.resource()
    musicBy!: Schema.MusicGroup | Schema.Person;
    @property.literal({ type: Number })
    numberOfEpisodes!: number;
    @property.resource()
    numberOfPlayers!: Schema.QuantitativeValue;
    @property.literal({ type: Number })
    numberOfSeasons!: number;
    @property()
    playMode!: Schema.GamePlayMode;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.resource()
    quest!: Schema.Thing;
    @property.resource()
    season!: Schema.CreativeWorkSeason;
    @property.resource()
    seasons!: Schema.CreativeWorkSeason;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return VideoGameSeriesClass
}

class VideoGameSeriesImpl extends VideoGameSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<VideoGameSeries>) {
    super(arg)
    this.types.add(schema.VideoGameSeries)
    initializeProperties(this, init)
  }
}
VideoGameSeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoGameSeries)
VideoGameSeriesMixin.Class = VideoGameSeriesImpl
