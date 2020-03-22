import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface UseAction extends Schema.ConsumeAction, RdfResource {
}

export default function UseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UseActionClass extends ConsumeActionMixin(Resource) implements UseAction {
  }
  return UseActionClass
}

class UseActionImpl extends UseActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UseAction)
  }
}
UseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UseAction)
UseActionMixin.Class = UseActionImpl
