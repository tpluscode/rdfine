import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<AssessAction>) {
    super(arg)
    this.types.add(schema.AssessAction)
    initializeProperties(this, init)
  }
}
AssessActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AssessAction)
AssessActionMixin.Class = AssessActionImpl
