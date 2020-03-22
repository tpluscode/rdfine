import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ReactActionMixin from './ReactAction';

export interface LikeAction extends Schema.ReactAction, RdfResource {
}

export default function LikeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LikeActionClass extends ReactActionMixin(Resource) implements LikeAction {
  }
  return LikeActionClass
}

class LikeActionImpl extends LikeActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LikeAction)
  }
}
LikeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LikeAction)
LikeActionMixin.Class = LikeActionImpl
