import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { TestCaseMixin } from './TestCase.js';

export interface GraphStoreTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, RdfResource<D> {
}

export function GraphStoreTestCaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GraphStoreTestCase> & RdfResourceCore> & Base {
  @namespace(dash)
  class GraphStoreTestCaseClass extends TestCaseMixin(Resource) implements Partial<GraphStoreTestCase> {
  }
  return GraphStoreTestCaseClass
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
