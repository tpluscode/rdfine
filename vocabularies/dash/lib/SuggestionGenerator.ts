import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface SuggestionGenerator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function SuggestionGeneratorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SuggestionGenerator> & RdfResourceCore> & Base {
  @namespace(dash)
  class SuggestionGeneratorClass extends RdfsResourceMixin(Resource) implements Partial<SuggestionGenerator> {
  }
  return SuggestionGeneratorClass
}

class SuggestionGeneratorImpl extends SuggestionGeneratorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SuggestionGenerator>) {
    super(arg, init)
    this.types.add(dash.SuggestionGenerator)
  }

  static readonly __mixins: Mixin[] = [SuggestionGeneratorMixin, RdfsResourceMixin];
}
SuggestionGeneratorMixin.appliesTo = dash.SuggestionGenerator
SuggestionGeneratorMixin.Class = SuggestionGeneratorImpl

export const fromPointer = createFactory<SuggestionGenerator>([RdfsResourceMixin, SuggestionGeneratorMixin], { types: [dash.SuggestionGenerator] });
