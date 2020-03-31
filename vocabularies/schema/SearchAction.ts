import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface SearchAction extends Schema.Action, RdfResource {
  query: string;
}

export default function SearchActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SearchActionClass extends ActionMixin(Resource) implements SearchAction {
    @property.literal()
    query!: string;
  }
  return SearchActionClass
}

class SearchActionImpl extends SearchActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SearchAction>) {
    super(arg, init)
    this.types.add(schema.SearchAction)
  }
}
SearchActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SearchAction)
SearchActionMixin.Class = SearchActionImpl
