import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ListenAction>) {
    super(arg, init)
    this.types.add(schema.ListenAction)
  }
}
ListenActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ListenAction)
ListenActionMixin.Class = ListenActionImpl
