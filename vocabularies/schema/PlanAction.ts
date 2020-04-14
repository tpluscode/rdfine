import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import OrganizeActionMixin from './OrganizeAction';

export interface PlanAction extends Schema.OrganizeAction, RdfResource {
  scheduledTime: Date;
}

export default function PlanActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlanActionClass extends OrganizeActionMixin(Resource) implements PlanAction {
    @property.literal()
    scheduledTime!: Date;
  }
  return PlanActionClass
}

class PlanActionImpl extends PlanActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlanAction>) {
    super(arg, init)
    this.types.add(schema.PlanAction)
  }
}
PlanActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PlanAction)
PlanActionMixin.Class = PlanActionImpl
