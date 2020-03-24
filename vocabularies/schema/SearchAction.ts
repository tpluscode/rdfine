import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<SearchAction>) {
    super(arg)
    this.types.add(schema.SearchAction)
    initializeProperties(this, init)
  }
}
SearchActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SearchAction)
SearchActionMixin.Class = SearchActionImpl
