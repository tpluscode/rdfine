import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface TestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  expectedResult: RDF.Term | undefined;
  expectedResultIsTTL: boolean | undefined;
  testModifiesEnvironment: boolean | undefined;
}

export function TestCaseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class TestCaseClass extends RdfsResourceMixin(Resource) implements Partial<TestCase> {
    @property()
    expectedResult: RDF.Term | undefined;
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
