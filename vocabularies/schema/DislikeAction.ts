import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DislikeAction)
  }
}
DislikeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DislikeAction)
DislikeActionMixin.Class = DislikeActionImpl