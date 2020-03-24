import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ListenAction>) {
    super(arg)
    this.types.add(schema.ListenAction)
    initializeProperties(this, init)
  }
}
ListenActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ListenAction)
ListenActionMixin.Class = ListenActionImpl
