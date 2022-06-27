import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { SPARQLSelectExecutableMixin as ShaclSPARQLSelectExecutableMixin } from '@rdfine/shacl/lib/SPARQLSelectExecutable';
import { TestCaseMixin } from './TestCase';

export interface QueryTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.SPARQLSelectExecutable<D>, Dash.TestCase<D>, RdfResource<D> {
}

export function QueryTestCaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<QueryTestCase> & RdfResourceCore> & Base {
  @namespace(dash)
  class QueryTestCaseClass extends TestCaseMixin(ShaclSPARQLSelectExecutableMixin(Resource)) implements Partial<QueryTestCase> {
  }
  return QueryTestCaseClass
}

class QueryTestCaseImpl extends QueryTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<QueryTestCase>) {
    super(arg, init)
    this.types.add(dash.QueryTestCase)
  }

  static readonly __mixins: Mixin[] = [QueryTestCaseMixin, ShaclSPARQLSelectExecutableMixin, TestCaseMixin];
}
QueryTestCaseMixin.appliesTo = dash.QueryTestCase
QueryTestCaseMixin.Class = QueryTestCaseImpl

export const fromPointer = createFactory<QueryTestCase>([TestCaseMixin, ShaclSPARQLSelectExecutableMixin, QueryTestCaseMixin], { types: [dash.QueryTestCase] });
