import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface UnRegisterAction extends Schema.InteractAction, RdfResource {
}

export default function UnRegisterActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UnRegisterActionClass extends InteractActionMixin(Resource) implements UnRegisterAction {
  }
  return UnRegisterActionClass
}

class UnRegisterActionImpl extends UnRegisterActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<UnRegisterAction>) {
    super(arg)
    this.types.add(schema.UnRegisterAction)
    initializeProperties(this, init)
  }
}
UnRegisterActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UnRegisterAction)
UnRegisterActionMixin.Class = UnRegisterActionImpl
