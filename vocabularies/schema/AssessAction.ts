import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface AssessAction extends Schema.Action, RdfResource {
}

export default function AssessActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AssessActionClass extends ActionMixin(Resource) implements AssessAction {
  }
  return AssessActionClass
}

class AssessActionImpl extends AssessActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AssessAction)
  }
}
AssessActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AssessAction)
AssessActionMixin.Class = AssessActionImpl