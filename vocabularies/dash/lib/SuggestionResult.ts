import '../extensions/sh/AbstractResult.js';
import { AbstractResultMixinEx } from '../extensions/sh/AbstractResult.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { AbstractResultMixin as ShaclAbstractResultMixin } from '@rdfine/shacl/lib/AbstractResult';

export interface SuggestionResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.AbstractResult<D>, rdfine.RdfResource<D> {
}

export function SuggestionResultMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SuggestionResult & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class SuggestionResultClass extends AbstractResultMixinEx(ShaclAbstractResultMixin(Resource)) {
  }
  return SuggestionResultClass as any
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

export const fromPointer = createFactory<SuggestionResult>([ShaclAbstractResultMixin, SuggestionResultMixin], { types: [dash.SuggestionResult] });
