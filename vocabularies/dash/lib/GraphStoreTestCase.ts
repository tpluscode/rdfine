import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { TestCaseMixin } from './TestCase.js';

export interface GraphStoreTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, rdfine.RdfResource<D> {
}

export function GraphStoreTestCaseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GraphStoreTestCase & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class GraphStoreTestCaseClass extends TestCaseMixin(Resource) {
  }
  return GraphStoreTestCaseClass as any
}

class GraphStoreTestCaseImpl extends GraphStoreTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GraphStoreTestCase>) {
    super(arg, init)
    this.types.add(dash.GraphStoreTestCase)
  }

  static readonly __mixins: Mixin[] = [GraphStoreTestCaseMixin, TestCaseMixin];
}
GraphStoreTestCaseMixin.appliesTo = dash.GraphStoreTestCase
GraphStoreTestCaseMixin.Class = GraphStoreTestCaseImpl

export const fromPointer = createFactory<GraphStoreTestCase>([TestCaseMixin, GraphStoreTestCaseMixin], { types: [dash.GraphStoreTestCase] });
