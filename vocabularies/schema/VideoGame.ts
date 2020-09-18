import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { GameMixin } from './Game';
import { SoftwareApplicationMixin } from './SoftwareApplication';

export interface VideoGame extends Schema.Game, Schema.SoftwareApplication, RdfResource {
  actor: Schema.Person | undefined;
  actors: Schema.Person | undefined;
  cheatCode: Schema.CreativeWork | undefined;
  director: Schema.Person | undefined;
  directors: Schema.Person | undefined;
  gamePlatform: Schema.Thing | undefined;
  gamePlatformLiteral: string | undefined;
  gameServer: Schema.GameServer | undefined;
  gameTip: Schema.CreativeWork | undefined;
  musicBy: Schema.MusicGroup | Schema.Person | undefined;
  playMode: Schema.GamePlayMode | undefined;
  trailer: Schema.VideoObject | undefined;
}

export function VideoGameMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VideoGameClass extends SoftwareApplicationMixin(GameMixin(Resource)) implements VideoGame {
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
