import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GameMixin } from './Game';
import { SoftwareApplicationMixin } from './SoftwareApplication';

export interface VideoGame<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Game<D>, Schema.SoftwareApplication<D>, RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  cheatCode: Schema.CreativeWork<D> | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  gamePlatform: Schema.Thing<D> | undefined;
  gamePlatformLiteral: string | undefined;
  gameServer: Schema.GameServer<D> | undefined;
  gameTip: Schema.CreativeWork<D> | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  playMode: Schema.GamePlayMode | undefined;
  trailer: Schema.VideoObject<D> | undefined;
}

export function VideoGameMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<VideoGame> & RdfResourceCore> & Base {
  @namespace(schema)
  class VideoGameClass extends SoftwareApplicationMixin(GameMixin(Resource)) implements Partial<VideoGame> {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    cheatCode: Schema.CreativeWork | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    gamePlatform: Schema.Thing | undefined;
    @property.literal({ path: schema.gamePlatform })
    gamePlatformLiteral: string | undefined;
    @property.resource()
    gameServer: Schema.GameServer | undefined;
    @property.resource()
    gameTip: Schema.CreativeWork | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property()
    playMode: Schema.GamePlayMode | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return VideoGameClass
}

class VideoGameImpl extends VideoGameMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VideoGame>) {
    super(arg, init)
    this.types.add(schema.VideoGame)
  }

  static readonly __mixins: Mixin[] = [VideoGameMixin, GameMixin, SoftwareApplicationMixin];
}
VideoGameMixin.appliesTo = schema.VideoGame
VideoGameMixin.Class = VideoGameImpl
