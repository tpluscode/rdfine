import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<AssignAction>) {
    super(arg)
    this.types.add(schema.AssignAction)
    initializeProperties<AssignAction>(this, init)
  }
}
AssignActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AssignAction)
AssignActionMixin.Class = AssignActionImpl
