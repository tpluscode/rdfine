import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ControlActionMixin from './ControlAction';

export interface DeactivateAction extends Schema.ControlAction, RdfResource {
}

export default function DeactivateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeactivateActionClass extends ControlActionMixin(Resource) implements DeactivateAction {
  }
  return DeactivateActionClass
}

class DeactivateActionImpl extends DeactivateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DeactivateAction>) {
    super(arg)
    this.types.add(schema.DeactivateAction)
    initializeProperties<DeactivateAction>(this, init)
  }
}
DeactivateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DeactivateAction)
DeactivateActionMixin.Class = DeactivateActionImpl
