import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { TestCaseResultMixin } from './TestCaseResult';

export interface SuccessTestCaseResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCaseResult<D>, RdfResource<D> {
}

export function SuccessTestCaseResultMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class SuccessTestCaseResultClass extends TestCaseResultMixin(Resource) implements SuccessTestCaseResult {
  }
  return SuccessTestCaseResultClass
}

class SuccessTestCaseResultImpl extends SuccessTestCaseResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SuccessTestCaseResult>) {
    super(arg, init)
    this.types.add(dash.SuccessTestCaseResult)
  }

  static readonly __mixins: Mixin[] = [SuccessTestCaseResultMixin, TestCaseResultMixin];
}
SuccessTestCaseResultMixin.appliesTo = dash.SuccessTestCaseResult
SuccessTestCaseResultMixin.Class = SuccessTestCaseResultImpl
