import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PlanActionMixin from './PlanAction';

export interface ReserveAction extends Schema.PlanAction, RdfResource {
}

export default function ReserveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReserveActionClass extends PlanActionMixin(Resource) implements ReserveAction {
  }
  return ReserveActionClass
}

class ReserveActionImpl extends ReserveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ReserveAction>) {
    super(arg)
    this.types.add(schema.ReserveAction)
    initializeProperties<ReserveAction>(this, init)
  }
}
ReserveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReserveAction)
ReserveActionMixin.Class = ReserveActionImpl
