import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { TestCaseMixin } from './TestCase.js';

export interface InferencingTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, rdfine.RdfResource<D> {
}

export function InferencingTestCaseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<InferencingTestCase> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class InferencingTestCaseClass extends TestCaseMixin(Resource) implements Partial<InferencingTestCase> {
  }
  return InferencingTestCaseClass
}

class InferencingTestCaseImpl extends InferencingTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InferencingTestCase>) {
    super(arg, init)
    this.types.add(dash.InferencingTestCase)
  }

  static readonly __mixins: Mixin[] = [InferencingTestCaseMixin, TestCaseMixin];
}
InferencingTestCaseMixin.appliesTo = dash.InferencingTestCase
InferencingTestCaseMixin.Class = InferencingTestCaseImpl

export const fromPointer = createFactory<InferencingTestCase>([TestCaseMixin, InferencingTestCaseMixin], { types: [dash.InferencingTestCase] });
