import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface GameServer extends Schema.Intangible, RdfResource {
  game: Schema.VideoGame;
  playersOnline: number;
  serverStatus: Schema.GameServerStatus;
}

export function GameServerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GameServerClass extends IntangibleMixin(Resource) implements GameServer {
    @property.resource()
    game!: Schema.VideoGame;
    @property.literal({ type: Number })
    playersOnline!: number;
    @property()
    serverStatus!: Schema.GameServerStatus;
  }
  return GameServerClass
}

class GameServerImpl extends GameServerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GameServer>) {
    super(arg, init)
    this.types.add(schema.GameServer)
  }

  static readonly __mixins: Mixin[] = [GameServerMixin, IntangibleMixin];
}
GameServerMixin.appliesTo = schema.GameServer
GameServerMixin.Class = GameServerImpl
