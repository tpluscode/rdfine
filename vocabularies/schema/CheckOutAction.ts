import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface CheckOutAction extends Schema.CommunicateAction, RdfResource {
}

export default function CheckOutActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CheckOutActionClass extends CommunicateActionMixin(Resource) implements CheckOutAction {
  }
  return CheckOutActionClass
}

class CheckOutActionImpl extends CheckOutActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CheckOutAction>) {
    super(arg)
    this.types.add(schema.CheckOutAction)
    initializeProperties(this, init)
  }
}
CheckOutActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckOutAction)
CheckOutActionMixin.Class = CheckOutActionImpl
