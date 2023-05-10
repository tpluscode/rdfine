import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { GameMixin } from './Game.js';
import { SoftwareApplicationMixin } from './SoftwareApplication.js';

export interface VideoGame<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Game<D>, Schema.SoftwareApplication<D>, rdfine.RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  cheatCode: Schema.CreativeWork<D> | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  gameEdition: string | undefined;
  gamePlatform: Schema.Thing<D> | undefined;
  gamePlatformLiteral: string | undefined;
  gameServer: Schema.GameServer<D> | undefined;
  gameTip: Schema.CreativeWork<D> | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  playMode: Schema.GamePlayMode | undefined;
  trailer: Schema.VideoObject<D> | undefined;
}

export function VideoGameMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<VideoGame> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VideoGameClass extends SoftwareApplicationMixin(GameMixin(Resource)) implements Partial<VideoGame> {
    @rdfine.property.resource()
    actor: Schema.Person | undefined;
    @rdfine.property.resource()
    actors: Schema.Person | undefined;
    @rdfine.property.resource()
    cheatCode: Schema.CreativeWork | undefined;
    @rdfine.property.resource()
    director: Schema.Person | undefined;
    @rdfine.property.resource()
    directors: Schema.Person | undefined;
    @rdfine.property.literal()
    gameEdition: string | undefined;
    @rdfine.property.resource()
    gamePlatform: Schema.Thing | undefined;
    @rdfine.property.literal({ path: schema.gamePlatform })
    gamePlatformLiteral: string | undefined;
    @rdfine.property.resource()
    gameServer: Schema.GameServer | undefined;
    @rdfine.property.resource()
    gameTip: Schema.CreativeWork | undefined;
    @rdfine.property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @rdfine.property()
    playMode: Schema.GamePlayMode | undefined;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<VideoGame>([SoftwareApplicationMixin, GameMixin, VideoGameMixin], { types: [schema.VideoGame] });
