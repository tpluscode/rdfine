import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ControlActionMixin from './ControlAction';

export interface DeactivateAction extends Schema.ControlAction, RdfResource {
}

export default function DeactivateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeactivateActionClass extends ControlActionMixin(Resource) implements DeactivateAction {
  }
  return DeactivateActionClass
}

class DeactivateActionImpl extends DeactivateActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DeactivateAction)
  }
}
DeactivateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DeactivateAction)
DeactivateActionMixin.Class = DeactivateActionImpl