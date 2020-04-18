import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ControlAction>) {
    super(arg, init)
    this.types.add(schema.ControlAction)
  }
}
ControlActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ControlAction)
ControlActionMixin.Class = ControlActionImpl
