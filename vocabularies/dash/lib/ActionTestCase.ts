import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { TestCaseMixin } from './TestCase';

export interface ActionTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, RdfResource<D> {
}

export function ActionTestCaseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class ActionTestCaseClass extends TestCaseMixin(Resource) implements ActionTestCase {
  }
  return ActionTestCaseClass
}

class ActionTestCaseImpl extends ActionTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ActionTestCase>) {
    super(arg, init)
    this.types.add(dash.ActionTestCase)
  }

  static readonly __mixins: Mixin[] = [ActionTestCaseMixin, TestCaseMixin];
}
ActionTestCaseMixin.appliesTo = dash.ActionTestCase
ActionTestCaseMixin.Class = ActionTestCaseImpl
