import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GameMixin } from './Game';
import { SoftwareApplicationMixin } from './SoftwareApplication';

export interface VideoGame<ID extends ResourceNode = ResourceNode> extends Schema.Game<ID>, Schema.SoftwareApplication<ID>, RdfResource<ID> {
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  actors: Schema.Person<SiblingNode<ID>> | undefined;
  cheatCode: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  directors: Schema.Person<SiblingNode<ID>> | undefined;
  gamePlatform: Schema.Thing<SiblingNode<ID>> | undefined;
  gamePlatformLiteral: string | undefined;
  gameServer: Schema.GameServer<SiblingNode<ID>> | undefined;
  gameTip: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  musicBy: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  playMode: Schema.GamePlayMode | undefined;
  trailer: Schema.VideoObject<SiblingNode<ID>> | undefined;
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
