import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<LoseAction>) {
    super(arg)
    this.types.add(schema.LoseAction)
    initializeProperties(this, init)
  }
}
LoseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LoseAction)
LoseActionMixin.Class = LoseActionImpl
