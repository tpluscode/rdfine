import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<GameServer>) {
    super(arg)
    this.types.add(schema.GameServer)
    initializeProperties(this, init)
  }
}
GameServerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GameServer)
GameServerMixin.Class = GameServerImpl
