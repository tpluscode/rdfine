import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface TestEnvironment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function TestEnvironmentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TestEnvironment> & RdfResourceCore> & Base {
  @namespace(dash)
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
