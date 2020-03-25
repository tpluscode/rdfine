import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PlanActionMixin from './PlanAction';

export interface CancelAction extends Schema.PlanAction, RdfResource {
}

export default function CancelActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CancelActionClass extends PlanActionMixin(Resource) implements CancelAction {
  }
  return CancelActionClass
}

class CancelActionImpl extends CancelActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CancelAction>) {
    super(arg)
    this.types.add(schema.CancelAction)
    initializeProperties<CancelAction>(this, init)
  }
}
CancelActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CancelAction)
CancelActionMixin.Class = CancelActionImpl
