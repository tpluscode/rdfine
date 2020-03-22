import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import OrganizeActionMixin from './OrganizeAction';

export interface AllocateAction extends Schema.OrganizeAction, RdfResource {
}

export default function AllocateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AllocateActionClass extends OrganizeActionMixin(Resource) implements AllocateAction {
  }
  return AllocateActionClass
}

class AllocateActionImpl extends AllocateActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AllocateAction)
  }
}
AllocateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AllocateAction)
AllocateActionMixin.Class = AllocateActionImpl
