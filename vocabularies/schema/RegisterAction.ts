import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface RegisterAction extends Schema.InteractAction, RdfResource {
}

export default function RegisterActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RegisterActionClass extends InteractActionMixin(Resource) implements RegisterAction {
  }
  return RegisterActionClass
}

class RegisterActionImpl extends RegisterActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.RegisterAction)
  }
}
RegisterActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RegisterAction)
RegisterActionMixin.Class = RegisterActionImpl
