import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { SuggestionGeneratorMixin } from './SuggestionGenerator';
import { SPARQLSelectExecutableMixin as ShaclSPARQLSelectExecutableMixin } from '@rdfine/shacl/lib/SPARQLSelectExecutable';
import { SPARQLUpdateExecutableMixin as ShaclSPARQLUpdateExecutableMixin } from '@rdfine/shacl/lib/SPARQLUpdateExecutable';

export interface SPARQLUpdateSuggestionGenerator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.SPARQLSelectExecutable<D>, Dash.SuggestionGenerator<D>, Shacl.SPARQLUpdateExecutable<D>, RdfResource<D> {
}

export function SPARQLUpdateSuggestionGeneratorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLUpdateSuggestionGenerator> & RdfResourceCore> & Base {
  @namespace(dash)
  class SPARQLUpdateSuggestionGeneratorClass extends ShaclSPARQLUpdateExecutableMixin(SuggestionGeneratorMixin(ShaclSPARQLSelectExecutableMixin(Resource))) implements Partial<SPARQLUpdateSuggestionGenerator> {
  }
  return SPARQLUpdateSuggestionGeneratorClass
}

class SPARQLUpdateSuggestionGeneratorImpl extends SPARQLUpdateSuggestionGeneratorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLUpdateSuggestionGenerator>) {
    super(arg, init)
    this.types.add(dash.SPARQLUpdateSuggestionGenerator)
  }

  static readonly __mixins: Mixin[] = [SPARQLUpdateSuggestionGeneratorMixin, ShaclSPARQLSelectExecutableMixin, SuggestionGeneratorMixin, ShaclSPARQLUpdateExecutableMixin];
}
SPARQLUpdateSuggestionGeneratorMixin.appliesTo = dash.SPARQLUpdateSuggestionGenerator
SPARQLUpdateSuggestionGeneratorMixin.Class = SPARQLUpdateSuggestionGeneratorImpl

export const fromPointer = createFactory<SPARQLUpdateSuggestionGenerator>([ShaclSPARQLUpdateExecutableMixin, SuggestionGeneratorMixin, ShaclSPARQLSelectExecutableMixin, SPARQLUpdateSuggestionGeneratorMixin], { types: [dash.SPARQLUpdateSuggestionGenerator] });
