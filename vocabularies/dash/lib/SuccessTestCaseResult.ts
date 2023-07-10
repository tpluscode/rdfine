import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { TestCaseResultMixin } from './TestCaseResult.js';

export interface SuccessTestCaseResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCaseResult<D>, rdfine.RdfResource<D> {
}

export function SuccessTestCaseResultMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SuccessTestCaseResult & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class SuccessTestCaseResultClass extends TestCaseResultMixin(Resource) {
  }
  return SuccessTestCaseResultClass as any
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

export const fromPointer = createFactory<SuccessTestCaseResult>([TestCaseResultMixin, SuccessTestCaseResultMixin], { types: [dash.SuccessTestCaseResult] });
