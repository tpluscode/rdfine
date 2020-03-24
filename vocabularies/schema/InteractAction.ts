import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<InteractAction>) {
    super(arg)
    this.types.add(schema.InteractAction)
    initializeProperties(this, init)
  }
}
InteractActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InteractAction)
InteractActionMixin.Class = InteractActionImpl
