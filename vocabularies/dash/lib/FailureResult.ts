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

export interface FailureResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.AbstractResult<D>, rdfine.RdfResource<D> {
}

export function FailureResultMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FailureResult> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class FailureResultClass extends AbstractResultMixinEx(ShaclAbstractResultMixin(Resource)) implements Partial<FailureResult> {
  }
  return FailureResultClass
}

class FailureResultImpl extends FailureResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FailureResult>) {
    super(arg, init)
    this.types.add(dash.FailureResult)
  }

  static readonly __mixins: Mixin[] = [FailureResultMixin, ShaclAbstractResultMixin];
}
FailureResultMixin.appliesTo = dash.FailureResult
FailureResultMixin.Class = FailureResultImpl

export const fromPointer = createFactory<FailureResult>([ShaclAbstractResultMixin, FailureResultMixin], { types: [dash.FailureResult] });
