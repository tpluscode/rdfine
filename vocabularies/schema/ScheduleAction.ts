import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import PlanActionMixin from './PlanAction';

export interface ScheduleAction extends Schema.PlanAction, RdfResource {
}

export default function ScheduleActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ScheduleActionClass extends PlanActionMixin(Resource) implements ScheduleAction {
  }
  return ScheduleActionClass
}

class ScheduleActionImpl extends ScheduleActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScheduleAction>) {
    super(arg, init)
    this.types.add(schema.ScheduleAction)
  }
}
ScheduleActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ScheduleAction)
ScheduleActionMixin.Class = ScheduleActionImpl
