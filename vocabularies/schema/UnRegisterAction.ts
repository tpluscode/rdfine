import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface UnRegisterAction extends Schema.InteractAction, RdfResource {
}

export default function UnRegisterActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UnRegisterActionClass extends InteractActionMixin(Resource) implements UnRegisterAction {
  }
  return UnRegisterActionClass
}

class UnRegisterActionImpl extends UnRegisterActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UnRegisterAction)
  }
}
UnRegisterActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UnRegisterAction)
UnRegisterActionMixin.Class = UnRegisterActionImpl
