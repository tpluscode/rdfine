import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AssignAction>) {
    super(arg, init)
    this.types.add(schema.AssignAction)
  }
}
AssignActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AssignAction)
AssignActionMixin.Class = AssignActionImpl
