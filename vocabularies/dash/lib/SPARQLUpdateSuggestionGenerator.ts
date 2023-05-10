import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { SPARQLSelectExecutableMixin as ShaclSPARQLSelectExecutableMixin } from '@rdfine/shacl/lib/SPARQLSelectExecutable';
import { SPARQLUpdateExecutableMixin as ShaclSPARQLUpdateExecutableMixin } from '@rdfine/shacl/lib/SPARQLUpdateExecutable';
import { SuggestionGeneratorMixin } from './SuggestionGenerator.js';

export interface SPARQLUpdateSuggestionGenerator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.SPARQLSelectExecutable<D>, Shacl.SPARQLUpdateExecutable<D>, Dash.SuggestionGenerator<D>, rdfine.RdfResource<D> {
}

export function SPARQLUpdateSuggestionGeneratorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SPARQLUpdateSuggestionGenerator> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class SPARQLUpdateSuggestionGeneratorClass extends SuggestionGeneratorMixin(ShaclSPARQLUpdateExecutableMixin(ShaclSPARQLSelectExecutableMixin(Resource))) implements Partial<SPARQLUpdateSuggestionGenerator> {
  }
  return SPARQLUpdateSuggestionGeneratorClass
}

class SPARQLUpdateSuggestionGeneratorImpl extends SPARQLUpdateSuggestionGeneratorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLUpdateSuggestionGenerator>) {
    super(arg, init)
    this.types.add(dash.SPARQLUpdateSuggestionGenerator)
  }

  static readonly __mixins: Mixin[] = [SPARQLUpdateSuggestionGeneratorMixin, ShaclSPARQLSelectExecutableMixin, ShaclSPARQLUpdateExecutableMixin, SuggestionGeneratorMixin];
}
SPARQLUpdateSuggestionGeneratorMixin.appliesTo = dash.SPARQLUpdateSuggestionGenerator
SPARQLUpdateSuggestionGeneratorMixin.Class = SPARQLUpdateSuggestionGeneratorImpl

export const fromPointer = createFactory<SPARQLUpdateSuggestionGenerator>([SuggestionGeneratorMixin, ShaclSPARQLUpdateExecutableMixin, ShaclSPARQLSelectExecutableMixin, SPARQLUpdateSuggestionGeneratorMixin], { types: [dash.SPARQLUpdateSuggestionGenerator] });
