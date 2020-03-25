import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface CheckInAction extends Schema.CommunicateAction, RdfResource {
}

export default function CheckInActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CheckInActionClass extends CommunicateActionMixin(Resource) implements CheckInAction {
  }
  return CheckInActionClass
}

class CheckInActionImpl extends CheckInActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CheckInAction>) {
    super(arg)
    this.types.add(schema.CheckInAction)
    initializeProperties<CheckInAction>(this, init)
  }
}
CheckInActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckInAction)
CheckInActionMixin.Class = CheckInActionImpl
