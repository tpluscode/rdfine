import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { TestCaseMixin } from './TestCase.js';

export interface ValidationTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, rdfine.RdfResource<D> {
}

export function ValidationTestCaseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ValidationTestCase> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ValidationTestCaseClass extends TestCaseMixin(Resource) implements Partial<ValidationTestCase> {
  }
  return ValidationTestCaseClass
}

class ValidationTestCaseImpl extends ValidationTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ValidationTestCase>) {
    super(arg, init)
    this.types.add(dash.ValidationTestCase)
  }

  static readonly __mixins: Mixin[] = [ValidationTestCaseMixin, TestCaseMixin];
}
ValidationTestCaseMixin.appliesTo = dash.ValidationTestCase
ValidationTestCaseMixin.Class = ValidationTestCaseImpl

export const fromPointer = createFactory<ValidationTestCase>([TestCaseMixin, ValidationTestCaseMixin], { types: [dash.ValidationTestCase] });
