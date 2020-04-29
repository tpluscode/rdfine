import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { InteractActionMixin } from './InteractAction';

export interface RegisterAction extends Schema.InteractAction, RdfResource {
}

export function RegisterActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RegisterActionClass extends InteractActionMixin(Resource) implements RegisterAction {
  }
  return RegisterActionClass
}

class RegisterActionImpl extends RegisterActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RegisterAction>) {
    super(arg, init)
    this.types.add(schema.RegisterAction)
  }
}
RegisterActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RegisterAction)
RegisterActionMixin.Class = RegisterActionImpl
