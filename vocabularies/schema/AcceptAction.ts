import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AllocateActionMixin from './AllocateAction';

export interface AcceptAction extends Schema.AllocateAction, RdfResource {
}

export default function AcceptActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AcceptActionClass extends AllocateActionMixin(Resource) implements AcceptAction {
  }
  return AcceptActionClass
}

class AcceptActionImpl extends AcceptActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AcceptAction)
  }
}
AcceptActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AcceptAction)
AcceptActionMixin.Class = AcceptActionImpl
