import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface GameServer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  game: Schema.VideoGame<D> | undefined;
  playersOnline: number | undefined;
  serverStatus: Schema.GameServerStatus | undefined;
}

export function GameServerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GameServer & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GameServerClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource()
    game: Schema.VideoGame | undefined;
    @rdfine.property.literal({ type: Number })
    playersOnline: number | undefined;
    @rdfine.property()
    serverStatus: Schema.GameServerStatus | undefined;
  }
  return GameServerClass as any
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

export const fromPointer = createFactory<GameServer>([IntangibleMixin, GameServerMixin], { types: [schema.GameServer] });
