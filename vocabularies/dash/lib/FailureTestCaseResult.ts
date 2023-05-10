import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { TestCaseResultMixin } from './TestCaseResult.js';

export interface FailureTestCaseResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCaseResult<D>, rdfine.RdfResource<D> {
}

export function FailureTestCaseResultMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FailureTestCaseResult> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class FailureTestCaseResultClass extends TestCaseResultMixin(Resource) implements Partial<FailureTestCaseResult> {
  }
  return FailureTestCaseResultClass
}

class FailureTestCaseResultImpl extends FailureTestCaseResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FailureTestCaseResult>) {
    super(arg, init)
    this.types.add(dash.FailureTestCaseResult)
  }

  static readonly __mixins: Mixin[] = [FailureTestCaseResultMixin, TestCaseResultMixin];
}
FailureTestCaseResultMixin.appliesTo = dash.FailureTestCaseResult
FailureTestCaseResultMixin.Class = FailureTestCaseResultImpl

export const fromPointer = createFactory<FailureTestCaseResult>([TestCaseResultMixin, FailureTestCaseResultMixin], { types: [dash.FailureTestCaseResult] });
