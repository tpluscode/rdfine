import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries';

export interface VideoGameSeries extends Schema.CreativeWorkSeries, RdfResource {
  actor: Schema.Person | undefined;
  actors: Schema.Person | undefined;
  characterAttribute: Schema.Thing | undefined;
  cheatCode: Schema.CreativeWork | undefined;
  containsSeason: Schema.CreativeWorkSeason | undefined;
  director: Schema.Person | undefined;
  directors: Schema.Person | undefined;
  episode: Schema.Episode | undefined;
  episodes: Schema.Episode | undefined;
  gameItem: Schema.Thing | undefined;
  gameLocation: Schema.Place | Schema.PostalAddress | undefined;
  gamePlatform: Schema.Thing | undefined;
  gamePlatformLiteral: string | undefined;
  musicBy: Schema.MusicGroup | Schema.Person | undefined;
  numberOfEpisodes: number | undefined;
  numberOfPlayers: Schema.QuantitativeValue | undefined;
  numberOfSeasons: number | undefined;
  playMode: Schema.GamePlayMode | undefined;
  productionCompany: Schema.Organization | undefined;
  quest: Schema.Thing | undefined;
  season: Schema.CreativeWorkSeason | undefined;
  seasons: Schema.CreativeWorkSeason | undefined;
  trailer: Schema.VideoObject | undefined;
}

export function VideoGameSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VideoGameSeriesClass extends CreativeWorkSeriesMixin(Resource) implements VideoGameSeries {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    characterAttribute: Schema.Thing | undefined;
    @property.resource()
    cheatCode: Schema.CreativeWork | undefined;
    @property.resource()
    containsSeason: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    episode: Schema.Episode | undefined;
    @property.resource()
    episodes: Schema.Episode | undefined;
    @property.resource()
    gameItem: Schema.Thing | undefined;
    @property.resource()
    gameLocation: Schema.Place | Schema.PostalAddress | undefined;
    @property.resource()
    gamePlatform: Schema.Thing | undefined;
    @property.literal({ path: schema.gamePlatform })
    gamePlatformLiteral: string | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.literal({ type: Number })
    numberOfEpisodes: number | undefined;
    @property.resource()
    numberOfPlayers: Schema.QuantitativeValue | undefined;
    @property.literal({ type: Number })
    numberOfSeasons: number | undefined;
    @property()
    playMode: Schema.GamePlayMode | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.resource()
    quest: Schema.Thing | undefined;
    @property.resource()
    season: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    seasons: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return VideoGameSeriesClass
}

class VideoGameSeriesImpl extends VideoGameSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VideoGameSeries>) {
    super(arg, init)
    this.types.add(schema.VideoGameSeries)
  }

  static readonly __mixins: Mixin[] = [VideoGameSeriesMixin, CreativeWorkSeriesMixin];
}
VideoGameSeriesMixin.appliesTo = schema.VideoGameSeries
VideoGameSeriesMixin.Class = VideoGameSeriesImpl
