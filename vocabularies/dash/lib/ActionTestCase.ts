import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { TestCaseMixin } from './TestCase.js';

export interface ActionTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.TestCase<D>, RdfResource<D> {
}

export function ActionTestCaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ActionTestCase> & RdfResourceCore> & Base {
  @namespace(dash)
  class ActionTestCaseClass extends TestCaseMixin(Resource) implements Partial<ActionTestCase> {
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

export const fromPointer = createFactory<ActionTestCase>([TestCaseMixin, ActionTestCaseMixin], { types: [dash.ActionTestCase] });
