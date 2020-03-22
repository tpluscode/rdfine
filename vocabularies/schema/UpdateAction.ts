import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface UpdateAction extends Schema.Action, RdfResource {
  collection: Schema.Thing;
  targetCollection: Schema.Thing;
}

export default function UpdateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UpdateActionClass extends ActionMixin(Resource) implements UpdateAction {
    @property.resource()
    collection!: Schema.Thing;
    @property.resource()
    targetCollection!: Schema.Thing;
  }
  return UpdateActionClass
}

class UpdateActionImpl extends UpdateActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UpdateAction)
  }
}
UpdateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UpdateAction)
UpdateActionMixin.Class = UpdateActionImpl
