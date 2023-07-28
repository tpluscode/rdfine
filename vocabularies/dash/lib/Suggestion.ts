import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Suggestion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  suggestionConfidence: number | undefined;
  suggestionGroup: RDF.Term | undefined;
}

export function SuggestionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Suggestion & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class SuggestionClass extends RdfsResourceMixin(Resource) {
    @rdfine.property.literal({ type: Number })
    suggestionConfidence: number | undefined;
    @rdfine.property()
    suggestionGroup: RDF.Term | undefined;
  }
  return SuggestionClass as any
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
