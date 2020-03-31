import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AppendAction>) {
    super(arg, init)
    this.types.add(schema.AppendAction)
  }
}
AppendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AppendAction)
AppendActionMixin.Class = AppendActionImpl
