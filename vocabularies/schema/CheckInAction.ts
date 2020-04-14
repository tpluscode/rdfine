import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<CheckInAction>) {
    super(arg, init)
    this.types.add(schema.CheckInAction)
  }
}
CheckInActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckInAction)
CheckInActionMixin.Class = CheckInActionImpl
