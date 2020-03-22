import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import UpdateActionMixin from './UpdateAction';

export interface DeleteAction extends Schema.UpdateAction, RdfResource {
}

export default function DeleteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeleteActionClass extends UpdateActionMixin(Resource) implements DeleteAction {
  }
  return DeleteActionClass
}

class DeleteActionImpl extends DeleteActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DeleteAction)
  }
}
DeleteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DeleteAction)
DeleteActionMixin.Class = DeleteActionImpl
