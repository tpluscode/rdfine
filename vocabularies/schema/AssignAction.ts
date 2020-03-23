import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AllocateActionMixin from './AllocateAction';

export interface AssignAction extends Schema.AllocateAction, RdfResource {
}

export default function AssignActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AssignActionClass extends AllocateActionMixin(Resource) implements AssignAction {
  }
  return AssignActionClass
}

class AssignActionImpl extends AssignActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AssignAction)
  }
}
AssignActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AssignAction)
AssignActionMixin.Class = AssignActionImpl
