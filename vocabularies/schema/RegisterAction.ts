import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface RegisterAction extends Schema.InteractAction, RdfResource {
}

export default function RegisterActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RegisterActionClass extends InteractActionMixin(Resource) implements RegisterAction {
  }
  return RegisterActionClass
}

class RegisterActionImpl extends RegisterActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RegisterAction>) {
    super(arg)
    this.types.add(schema.RegisterAction)
    initializeProperties<RegisterAction>(this, init)
  }
}
RegisterActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RegisterAction)
RegisterActionMixin.Class = RegisterActionImpl
