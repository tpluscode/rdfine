import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface LeaveAction extends Schema.InteractAction, RdfResource {
  event: Schema.Event;
}

export default function LeaveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LeaveActionClass extends InteractActionMixin(Resource) implements LeaveAction {
    @property.resource()
    event!: Schema.Event;
  }
  return LeaveActionClass
}

class LeaveActionImpl extends LeaveActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LeaveAction)
  }
}
LeaveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LeaveAction)
LeaveActionMixin.Class = LeaveActionImpl
