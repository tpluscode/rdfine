import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<CheckOutAction>) {
    super(arg, init)
    this.types.add(schema.CheckOutAction)
  }
}
CheckOutActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckOutAction)
CheckOutActionMixin.Class = CheckOutActionImpl
