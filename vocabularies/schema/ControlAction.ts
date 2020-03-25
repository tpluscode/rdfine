import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface ControlAction extends Schema.Action, RdfResource {
}

export default function ControlActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ControlActionClass extends ActionMixin(Resource) implements ControlAction {
  }
  return ControlActionClass
}

class ControlActionImpl extends ControlActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ControlAction>) {
    super(arg)
    this.types.add(schema.ControlAction)
    initializeProperties<ControlAction>(this, init)
  }
}
ControlActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ControlAction)
ControlActionMixin.Class = ControlActionImpl
