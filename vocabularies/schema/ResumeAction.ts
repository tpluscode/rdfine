import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ControlActionMixin from './ControlAction';

export interface ResumeAction extends Schema.ControlAction, RdfResource {
}

export default function ResumeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResumeActionClass extends ControlActionMixin(Resource) implements ResumeAction {
  }
  return ResumeActionClass
}

class ResumeActionImpl extends ResumeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ResumeAction>) {
    super(arg, init)
    this.types.add(schema.ResumeAction)
  }
}
ResumeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ResumeAction)
ResumeActionMixin.Class = ResumeActionImpl
