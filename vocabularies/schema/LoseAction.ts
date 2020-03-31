import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import AchieveActionMixin from './AchieveAction';

export interface LoseAction extends Schema.AchieveAction, RdfResource {
  winner: Schema.Person;
}

export default function LoseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LoseActionClass extends AchieveActionMixin(Resource) implements LoseAction {
    @property.resource()
    winner!: Schema.Person;
  }
  return LoseActionClass
}

class LoseActionImpl extends LoseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LoseAction>) {
    super(arg, init)
    this.types.add(schema.LoseAction)
  }
}
LoseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LoseAction)
LoseActionMixin.Class = LoseActionImpl
