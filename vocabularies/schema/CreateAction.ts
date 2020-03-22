import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface CreateAction extends Schema.Action, RdfResource {
}

export default function CreateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreateActionClass extends ActionMixin(Resource) implements CreateAction {
  }
  return CreateActionClass
}

class CreateActionImpl extends CreateActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CreateAction)
  }
}
CreateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CreateAction)
CreateActionMixin.Class = CreateActionImpl
