import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';

export interface Suggestion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  suggestionConfidence: number | undefined;
  suggestionGroup: RDF.Term | undefined;
}

export function SuggestionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Suggestion> & RdfResourceCore> & Base {
  @namespace(dash)
  class SuggestionClass extends RdfsResourceMixin(Resource) implements Partial<Suggestion> {
    @property.literal({ type: Number })
    suggestionConfidence: number | undefined;
    @property()
    suggestionGroup: RDF.Term | undefined;
  }
  return SuggestionClass
}

class SuggestionImpl extends SuggestionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Suggestion>) {
    super(arg, init)
    this.types.add(dash.Suggestion)
  }

  static readonly __mixins: Mixin[] = [SuggestionMixin, RdfsResourceMixin];
}
SuggestionMixin.appliesTo = dash.Suggestion
SuggestionMixin.Class = SuggestionImpl

export const fromPointer = createFactory<Suggestion>([RdfsResourceMixin, SuggestionMixin], { types: [dash.Suggestion] });
