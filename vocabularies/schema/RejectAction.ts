import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<RejectAction>) {
    super(arg, init)
    this.types.add(schema.RejectAction)
  }
}
RejectActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RejectAction)
RejectActionMixin.Class = RejectActionImpl
