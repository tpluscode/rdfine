import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { TestCaseMixin } from './TestCase';

export interface ValidationTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, RdfResource<D> {
}

export function ValidationTestCaseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class ValidationTestCaseClass extends TestCaseMixin(Resource) implements ValidationTestCase {
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
