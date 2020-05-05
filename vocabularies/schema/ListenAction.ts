import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ConsumeActionMixin } from './ConsumeAction';

export interface ListenAction extends Schema.ConsumeAction, RdfResource {
}

export function ListenActionMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [ListenActionMixin, ConsumeActionMixin];
}
ListenActionMixin.appliesTo = schema.ListenAction
ListenActionMixin.Class = ListenActionImpl
