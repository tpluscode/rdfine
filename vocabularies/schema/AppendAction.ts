import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import InsertActionMixin from './InsertAction';

export interface AppendAction extends Schema.InsertAction, RdfResource {
}

export default function AppendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AppendActionClass extends InsertActionMixin(Resource) implements AppendAction {
  }
  return AppendActionClass
}

class AppendActionImpl extends AppendActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AppendAction)
  }
}
AppendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AppendAction)
AppendActionMixin.Class = AppendActionImpl
