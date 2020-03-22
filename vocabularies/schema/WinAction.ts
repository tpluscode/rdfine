import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AchieveActionMixin from './AchieveAction';

export interface WinAction extends Schema.AchieveAction, RdfResource {
  loser: Schema.Person;
}

export default function WinActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WinActionClass extends AchieveActionMixin(Resource) implements WinAction {
    @property.resource()
    loser!: Schema.Person;
  }
  return WinActionClass
}

class WinActionImpl extends WinActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WinAction)
  }
}
WinActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WinAction)
WinActionMixin.Class = WinActionImpl
