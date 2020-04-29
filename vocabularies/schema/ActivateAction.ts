import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ControlActionMixin } from './ControlAction';

export interface ActivateAction extends Schema.ControlAction, RdfResource {
}

export function ActivateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ActivateActionClass extends ControlActionMixin(Resource) implements ActivateAction {
  }
  return ActivateActionClass
}

class ActivateActionImpl extends ActivateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ActivateAction>) {
    super(arg, init)
    this.types.add(schema.ActivateAction)
  }
}
ActivateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ActivateAction)
ActivateActionMixin.Class = ActivateActionImpl
