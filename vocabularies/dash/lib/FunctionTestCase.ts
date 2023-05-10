import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { TestCaseMixin } from './TestCase.js';

export interface FunctionTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, rdfine.RdfResource<D> {
}

export function FunctionTestCaseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FunctionTestCase> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class FunctionTestCaseClass extends TestCaseMixin(Resource) implements Partial<FunctionTestCase> {
  }
  return FunctionTestCaseClass
}

class FunctionTestCaseImpl extends FunctionTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FunctionTestCase>) {
    super(arg, init)
    this.types.add(dash.FunctionTestCase)
  }

  static readonly __mixins: Mixin[] = [FunctionTestCaseMixin, TestCaseMixin];
}
FunctionTestCaseMixin.appliesTo = dash.FunctionTestCase
FunctionTestCaseMixin.Class = FunctionTestCaseImpl

export const fromPointer = createFactory<FunctionTestCase>([TestCaseMixin, FunctionTestCaseMixin], { types: [dash.FunctionTestCase] });
