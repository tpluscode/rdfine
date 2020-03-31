import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface GameServer extends Schema.Intangible, RdfResource {
  game: Schema.VideoGame;
  playersOnline: number;
  serverStatus: Schema.GameServerStatus;
}

export default function GameServerMixin<Base extends Constructor>(Resource: Base) {
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
}
GameServerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GameServer)
GameServerMixin.Class = GameServerImpl
