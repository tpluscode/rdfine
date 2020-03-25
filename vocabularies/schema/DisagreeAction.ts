import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReactActionMixin from './ReactAction';

export interface DisagreeAction extends Schema.ReactAction, RdfResource {
}

export default function DisagreeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DisagreeActionClass extends ReactActionMixin(Resource) implements DisagreeAction {
  }
  return DisagreeActionClass
}

class DisagreeActionImpl extends DisagreeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DisagreeAction>) {
    super(arg, init)
    this.types.add(schema.DisagreeAction)
  }
}
DisagreeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DisagreeAction)
DisagreeActionMixin.Class = DisagreeActionImpl
