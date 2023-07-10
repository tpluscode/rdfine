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

export interface SuggestionGenerator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
}

export function SuggestionGeneratorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SuggestionGenerator & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class SuggestionGeneratorClass extends RdfsResourceMixin(Resource) {
  }
  return SuggestionGeneratorClass as any
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
