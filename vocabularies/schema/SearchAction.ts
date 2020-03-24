import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SearchAction)
  }
}
SearchActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SearchAction)
SearchActionMixin.Class = SearchActionImpl
