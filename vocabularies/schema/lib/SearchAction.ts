import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface SearchAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
  query: string | undefined;
}

export function SearchActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SearchAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class SearchActionClass extends ActionMixin(Resource) implements Partial<SearchAction> {
    @property.literal()
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
