import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface InteractAction extends Schema.Action, RdfResource {
}

export default function InteractActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InteractActionClass extends ActionMixin(Resource) implements InteractAction {
  }
  return InteractActionClass
}

class InteractActionImpl extends InteractActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.InteractAction)
  }
}
InteractActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InteractAction)
InteractActionMixin.Class = InteractActionImpl
