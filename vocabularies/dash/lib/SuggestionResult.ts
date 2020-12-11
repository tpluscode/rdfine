import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { AbstractResultMixin as ShaclAbstractResultMixin } from '@rdfine/shacl/lib/AbstractResult';

export interface SuggestionResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.AbstractResult<D>, RdfResource<D> {
}

export function SuggestionResultMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class SuggestionResultClass extends ShaclAbstractResultMixin(Resource) implements SuggestionResult {
  }
  return SuggestionResultClass
}

class SuggestionResultImpl extends SuggestionResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SuggestionResult>) {
    super(arg, init)
    this.types.add(dash.SuggestionResult)
  }

  static readonly __mixins: Mixin[] = [SuggestionResultMixin, ShaclAbstractResultMixin];
}
SuggestionResultMixin.appliesTo = dash.SuggestionResult
SuggestionResultMixin.Class = SuggestionResultImpl
