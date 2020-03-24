import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ControlActionMixin from './ControlAction';

export interface SuspendAction extends Schema.ControlAction, RdfResource {
}

export default function SuspendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SuspendActionClass extends ControlActionMixin(Resource) implements SuspendAction {
  }
  return SuspendActionClass
}

class SuspendActionImpl extends SuspendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SuspendAction>) {
    super(arg)
    this.types.add(schema.SuspendAction)
    initializeProperties(this, init)
  }
}
SuspendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SuspendAction)
SuspendActionMixin.Class = SuspendActionImpl
