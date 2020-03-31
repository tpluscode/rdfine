import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<InteractAction>) {
    super(arg, init)
    this.types.add(schema.InteractAction)
  }
}
InteractActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InteractAction)
InteractActionMixin.Class = InteractActionImpl
