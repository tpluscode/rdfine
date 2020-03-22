import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import MoveActionMixin from './MoveAction';

export interface ArriveAction extends Schema.MoveAction, RdfResource {
}

export default function ArriveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ArriveActionClass extends MoveActionMixin(Resource) implements ArriveAction {
  }
  return ArriveActionClass
}

class ArriveActionImpl extends ArriveActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ArriveAction)
  }
}
ArriveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ArriveAction)
ArriveActionMixin.Class = ArriveActionImpl
