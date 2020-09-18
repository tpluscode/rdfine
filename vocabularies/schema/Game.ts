import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Game extends Schema.CreativeWork, RdfResource {
  characterAttribute: Schema.Thing | undefined;
  gameItem: Schema.Thing | undefined;
  gameLocation: Schema.Place | Schema.PostalAddress | undefined;
  numberOfPlayers: Schema.QuantitativeValue | undefined;
  quest: Schema.Thing | undefined;
}

export function GameMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GameClass extends CreativeWorkMixin(Resource) implements Game {
    @property.resource()
    characterAttribute: Schema.Thing | undefined;
    @property.resource()
    gameItem: Schema.Thing | undefined;
    @property.resource()
    gameLocation: Schema.Place | Schema.PostalAddress | undefined;
    @property.resource()
    numberOfPlayers: Schema.QuantitativeValue | undefined;
    @property.resource()
    quest: Schema.Thing | undefined;
  }
  return GameClass
}

class GameImpl extends GameMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Game>) {
    super(arg, init)
    this.types.add(schema.Game)
  }

  static readonly __mixins: Mixin[] = [GameMixin, CreativeWorkMixin];
}
GameMixin.appliesTo = schema.Game
GameMixin.Class = GameImpl
