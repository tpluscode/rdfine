import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ReactActionMixin from './ReactAction';

export interface DisagreeAction extends Schema.ReactAction, RdfResource {
}

export default function DisagreeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DisagreeActionClass extends ReactActionMixin(Resource) implements DisagreeAction {
  }
  return DisagreeActionClass
}

class DisagreeActionImpl extends DisagreeActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DisagreeAction)
  }
}
DisagreeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DisagreeAction)
DisagreeActionMixin.Class = DisagreeActionImpl
