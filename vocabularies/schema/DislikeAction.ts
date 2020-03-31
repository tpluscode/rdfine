import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<DislikeAction>) {
    super(arg, init)
    this.types.add(schema.DislikeAction)
  }
}
DislikeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DislikeAction)
DislikeActionMixin.Class = DislikeActionImpl
