import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ScheduleAction>) {
    super(arg)
    this.types.add(schema.ScheduleAction)
    initializeProperties<ScheduleAction>(this, init)
  }
}
ScheduleActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ScheduleAction)
ScheduleActionMixin.Class = ScheduleActionImpl
