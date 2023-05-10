import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface SearchAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  query: string | undefined;
}

export function SearchActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SearchAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SearchActionClass extends ActionMixin(Resource) implements Partial<SearchAction> {
    @rdfine.property.literal()
    query: string | undefined;
  }
  return SearchActionClass
}

class SearchActionImpl extends SearchActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SearchAction>) {
    super(arg, init)
    this.types.add(schema.SearchAction)
  }

  static readonly __mixins: Mixin[] = [SearchActionMixin, ActionMixin];
}
SearchActionMixin.appliesTo = schema.SearchAction
SearchActionMixin.Class = SearchActionImpl

export const fromPointer = createFactory<SearchAction>([ActionMixin, SearchActionMixin], { types: [schema.SearchAction] });
