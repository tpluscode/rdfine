import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LoseAction)
  }
}
LoseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LoseAction)
LoseActionMixin.Class = LoseActionImpl
