import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { TestCaseResultMixin } from './TestCaseResult';

export interface FailureTestCaseResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCaseResult<D>, RdfResource<D> {
}

export function FailureTestCaseResultMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FailureTestCaseResult> & RdfResourceCore> & Base {
  @namespace(dash)
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
