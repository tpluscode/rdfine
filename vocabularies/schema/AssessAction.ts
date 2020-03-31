import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AssessAction>) {
    super(arg, init)
    this.types.add(schema.AssessAction)
  }
}
AssessActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AssessAction)
AssessActionMixin.Class = AssessActionImpl
