import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface TestEnvironment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
}

export function TestEnvironmentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TestEnvironment> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class TestEnvironmentClass extends RdfsResourceMixin(Resource) implements Partial<TestEnvironment> {
  }
  return TestEnvironmentClass
}

class TestEnvironmentImpl extends TestEnvironmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TestEnvironment>) {
    super(arg, init)
    this.types.add(dash.TestEnvironment)
  }

  static readonly __mixins: Mixin[] = [TestEnvironmentMixin, RdfsResourceMixin];
}
TestEnvironmentMixin.appliesTo = dash.TestEnvironment
TestEnvironmentMixin.Class = TestEnvironmentImpl

export const fromPointer = createFactory<TestEnvironment>([RdfsResourceMixin, TestEnvironmentMixin], { types: [dash.TestEnvironment] });
