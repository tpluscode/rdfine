import { AbstractResultMixinEx } from '../extensions/sh';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { AbstractResultMixin as ShaclAbstractResultMixin } from '@rdfine/shacl/lib/AbstractResult';

export interface TestCaseResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.AbstractResult<D>, RdfResource<D> {
}

export function TestCaseResultMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TestCaseResult> & RdfResourceCore> & Base {
  @namespace(dash)
  class TestCaseResultClass extends AbstractResultMixinEx(ShaclAbstractResultMixin(Resource)) implements Partial<TestCaseResult> {
  }
  return TestCaseResultClass
}

class TestCaseResultImpl extends TestCaseResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TestCaseResult>) {
    super(arg, init)
    this.types.add(dash.TestCaseResult)
  }

  static readonly __mixins: Mixin[] = [TestCaseResultMixin, ShaclAbstractResultMixin];
}
TestCaseResultMixin.appliesTo = dash.TestCaseResult
TestCaseResultMixin.Class = TestCaseResultImpl

export const fromPointer = createFactory<TestCaseResult>([ShaclAbstractResultMixin, TestCaseResultMixin], { types: [dash.TestCaseResult] });
