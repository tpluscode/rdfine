import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ReserveAction)
  }
}
ReserveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReserveAction)
ReserveActionMixin.Class = ReserveActionImpl
