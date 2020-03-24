import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AllocateActionMixin from './AllocateAction';

export interface RejectAction extends Schema.AllocateAction, RdfResource {
}

export default function RejectActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RejectActionClass extends AllocateActionMixin(Resource) implements RejectAction {
  }
  return RejectActionClass
}

class RejectActionImpl extends RejectActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RejectAction>) {
    super(arg)
    this.types.add(schema.RejectAction)
    initializeProperties(this, init)
  }
}
RejectActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RejectAction)
RejectActionMixin.Class = RejectActionImpl
