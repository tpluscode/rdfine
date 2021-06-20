import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface TestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  expectedResult: Array<RDF.Term>;
  expectedResultIsTTL: boolean | undefined;
  testModifiesEnvironment: boolean | undefined;
}

export function TestCaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TestCase> & RdfResourceCore> & Base {
  @namespace(dash)
  class TestCaseClass extends RdfsResourceMixin(Resource) implements Partial<TestCase> {
    @property({ values: 'array' })
    expectedResult!: Array<RDF.Term>;
    @property.literal({ type: Boolean })
    expectedResultIsTTL: boolean | undefined;
    @property.literal({ type: Boolean })
    testModifiesEnvironment: boolean | undefined;
  }
  return TestCaseClass
}

class TestCaseImpl extends TestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TestCase>) {
    super(arg, init)
    this.types.add(dash.TestCase)
  }

  static readonly __mixins: Mixin[] = [TestCaseMixin, RdfsResourceMixin];
}
TestCaseMixin.appliesTo = dash.TestCase
TestCaseMixin.Class = TestCaseImpl

export const fromPointer = createFactory<TestCase>([RdfsResourceMixin, TestCaseMixin], { types: [dash.TestCase] });
