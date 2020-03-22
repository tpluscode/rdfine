import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface ListenAction extends Schema.ConsumeAction, RdfResource {
}

export default function ListenActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ListenActionClass extends ConsumeActionMixin(Resource) implements ListenAction {
  }
  return ListenActionClass
}

class ListenActionImpl extends ListenActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ListenAction)
  }
}
ListenActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ListenAction)
ListenActionMixin.Class = ListenActionImpl
