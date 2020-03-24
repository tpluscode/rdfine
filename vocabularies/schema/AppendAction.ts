import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<AppendAction>) {
    super(arg)
    this.types.add(schema.AppendAction)
    initializeProperties(this, init)
  }
}
AppendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AppendAction)
AppendActionMixin.Class = AppendActionImpl
