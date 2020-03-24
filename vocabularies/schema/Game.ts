import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Game extends Schema.CreativeWork, RdfResource {
  characterAttribute: Schema.Thing;
  gameItem: Schema.Thing;
  gameLocation: Schema.Place | Schema.PostalAddress;
  numberOfPlayers: Schema.QuantitativeValue;
  quest: Schema.Thing;
}

export default function GameMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GameClass extends CreativeWorkMixin(Resource) implements Game {
    @property.resource()
    characterAttribute!: Schema.Thing;
    @property.resource()
    gameItem!: Schema.Thing;
    @property.resource()
    gameLocation!: Schema.Place | Schema.PostalAddress;
    @property.resource()
    numberOfPlayers!: Schema.QuantitativeValue;
    @property.resource()
    quest!: Schema.Thing;
  }
  return GameClass
}

class GameImpl extends GameMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Game>) {
    super(arg)
    this.types.add(schema.Game)
    initializeProperties(this, init)
  }
}
GameMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Game)
GameMixin.Class = GameImpl
