import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FindActionMixin from './FindAction';

export interface CheckAction extends Schema.FindAction, RdfResource {
}

export default function CheckActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CheckActionClass extends FindActionMixin(Resource) implements CheckAction {
  }
  return CheckActionClass
}

class CheckActionImpl extends CheckActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CheckAction)
  }
}
CheckActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckAction)
CheckActionMixin.Class = CheckActionImpl
