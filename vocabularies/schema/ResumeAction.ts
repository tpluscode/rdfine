import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ResumeAction>) {
    super(arg)
    this.types.add(schema.ResumeAction)
    initializeProperties(this, init)
  }
}
ResumeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ResumeAction)
ResumeActionMixin.Class = ResumeActionImpl
