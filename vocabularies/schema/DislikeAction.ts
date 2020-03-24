import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReactActionMixin from './ReactAction';

export interface DislikeAction extends Schema.ReactAction, RdfResource {
}

export default function DislikeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DislikeActionClass extends ReactActionMixin(Resource) implements DislikeAction {
  }
  return DislikeActionClass
}

class DislikeActionImpl extends DislikeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DislikeAction>) {
    super(arg)
    this.types.add(schema.DislikeAction)
    initializeProperties(this, init)
  }
}
DislikeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DislikeAction)
DislikeActionMixin.Class = DislikeActionImpl
