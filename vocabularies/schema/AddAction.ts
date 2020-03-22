import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import UpdateActionMixin from './UpdateAction';

export interface AddAction extends Schema.UpdateAction, RdfResource {
}

export default function AddActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AddActionClass extends UpdateActionMixin(Resource) implements AddAction {
  }
  return AddActionClass
}

class AddActionImpl extends AddActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AddAction)
  }
}
AddActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AddAction)
AddActionMixin.Class = AddActionImpl
