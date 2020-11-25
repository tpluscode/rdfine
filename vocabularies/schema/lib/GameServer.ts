import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface GameServer<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  game: Schema.VideoGame<SiblingNode<ID>> | undefined;
  playersOnline: number | undefined;
  serverStatus: Schema.GameServerStatus | undefined;
}

export function GameServerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GameServerClass extends IntangibleMixin(Resource) implements GameServer {
    @property.resource()
    game: Schema.VideoGame | undefined;
    @property.literal({ type: Number })
    playersOnline: number | undefined;
    @property()
    serverStatus: Schema.GameServerStatus | undefined;
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
