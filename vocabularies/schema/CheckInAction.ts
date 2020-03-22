import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface CheckInAction extends Schema.CommunicateAction, RdfResource {
}

export default function CheckInActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CheckInActionClass extends CommunicateActionMixin(Resource) implements CheckInAction {
  }
  return CheckInActionClass
}

class CheckInActionImpl extends CheckInActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CheckInAction)
  }
}
CheckInActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckInAction)
CheckInActionMixin.Class = CheckInActionImpl
