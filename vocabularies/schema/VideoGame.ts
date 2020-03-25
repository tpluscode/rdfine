import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import GameMixin from './Game';
import SoftwareApplicationMixin from './SoftwareApplication';

export interface VideoGame extends Schema.Game, Schema.SoftwareApplication, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  cheatCode: Schema.CreativeWork;
  director: Schema.Person;
  directors: Schema.Person;
  gamePlatform: Schema.Thing;
  gamePlatformLiteral: string;
  gameServer: Schema.GameServer;
  gameTip: Schema.CreativeWork;
  musicBy: Schema.MusicGroup | Schema.Person;
  playMode: Schema.GamePlayMode;
  trailer: Schema.VideoObject;
}

export default function VideoGameMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VideoGameClass extends SoftwareApplicationMixin(GameMixin(Resource)) implements VideoGame {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.resource()
    cheatCode!: Schema.CreativeWork;
    @property.resource()
    director!: Schema.Person;
    @property.resource()
    directors!: Schema.Person;
    @property.resource()
    gamePlatform!: Schema.Thing;
    @property.literal({ path: schema.gamePlatform })
    gamePlatformLiteral!: string;
    @property.resource()
    gameServer!: Schema.GameServer;
    @property.resource()
    gameTip!: Schema.CreativeWork;
    @property.resource()
    musicBy!: Schema.MusicGroup | Schema.Person;
    @property()
    playMode!: Schema.GamePlayMode;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return VideoGameClass
}

class VideoGameImpl extends VideoGameMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<VideoGame>) {
    super(arg)
    this.types.add(schema.VideoGame)
    initializeProperties<VideoGame>(this, init)
  }
}
VideoGameMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoGame)
VideoGameMixin.Class = VideoGameImpl
