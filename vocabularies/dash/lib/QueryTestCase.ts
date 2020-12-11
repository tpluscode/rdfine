import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { TestCaseMixin } from './TestCase';
import { SPARQLSelectExecutableMixin as ShaclSPARQLSelectExecutableMixin } from '@rdfine/shacl/lib/SPARQLSelectExecutable';

export interface QueryTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, Shacl.SPARQLSelectExecutable<D>, RdfResource<D> {
}

export function QueryTestCaseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class QueryTestCaseClass extends ShaclSPARQLSelectExecutableMixin(TestCaseMixin(Resource)) implements QueryTestCase {
  }
  return QueryTestCaseClass
}

class QueryTestCaseImpl extends QueryTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<QueryTestCase>) {
    super(arg, init)
    this.types.add(dash.QueryTestCase)
  }

  static readonly __mixins: Mixin[] = [QueryTestCaseMixin, TestCaseMixin, ShaclSPARQLSelectExecutableMixin];
}
QueryTestCaseMixin.appliesTo = dash.QueryTestCase
QueryTestCaseMixin.Class = QueryTestCaseImpl
