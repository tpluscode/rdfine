import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import InformActionMixin from './InformAction';

export interface ConfirmAction extends Schema.InformAction, RdfResource {
}

export default function ConfirmActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ConfirmActionClass extends InformActionMixin(Resource) implements ConfirmAction {
  }
  return ConfirmActionClass
}

class ConfirmActionImpl extends ConfirmActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ConfirmAction)
  }
}
ConfirmActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ConfirmAction)
ConfirmActionMixin.Class = ConfirmActionImpl
