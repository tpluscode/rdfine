import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries';

export interface VideoGameSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeries<D>, RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  characterAttribute: Schema.Thing<D> | undefined;
  cheatCode: Schema.CreativeWork<D> | undefined;
  containsSeason: Schema.CreativeWorkSeason<D> | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  episode: Schema.Episode<D> | undefined;
  episodes: Schema.Episode<D> | undefined;
  gameItem: Schema.Thing<D> | undefined;
  gameLocation: Schema.Place<D> | Schema.PostalAddress<D> | undefined;
  gamePlatform: Schema.Thing<D> | undefined;
  gamePlatformLiteral: string | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  numberOfEpisodes: number | undefined;
  numberOfPlayers: Schema.QuantitativeValue<D> | undefined;
  numberOfSeasons: number | undefined;
  playMode: Schema.GamePlayMode | undefined;
  productionCompany: Schema.Organization<D> | undefined;
  quest: Schema.Thing<D> | undefined;
  season: Schema.CreativeWorkSeason<D> | undefined;
  seasons: Schema.CreativeWorkSeason<D> | undefined;
  trailer: Schema.VideoObject<D> | undefined;
}

export function VideoGameSeriesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<VideoGameSeries> & RdfResourceCore> & Base {
  @namespace(schema)
  class VideoGameSeriesClass extends CreativeWorkSeriesMixin(Resource) implements Partial<VideoGameSeries> {
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

export const fromPointer = createFactory<VideoGameSeries>([CreativeWorkSeriesMixin, VideoGameSeriesMixin], { types: [schema.VideoGameSeries] });
