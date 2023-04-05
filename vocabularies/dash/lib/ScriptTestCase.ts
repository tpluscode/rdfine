import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ScriptMixin } from './Script.js';
import { TestCaseMixin } from './TestCase.js';

export interface ScriptTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, Dash.TestCase<D>, RdfResource<D> {
}

export function ScriptTestCaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ScriptTestCase> & RdfResourceCore> & Base {
  @namespace(dash)
  class ScriptTestCaseClass extends TestCaseMixin(ScriptMixin(Resource)) implements Partial<ScriptTestCase> {
  }
  return ScriptTestCaseClass
}

class ScriptTestCaseImpl extends ScriptTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScriptTestCase>) {
    super(arg, init)
    this.types.add(dash.ScriptTestCase)
  }

  static readonly __mixins: Mixin[] = [ScriptTestCaseMixin, ScriptMixin, TestCaseMixin];
}
ScriptTestCaseMixin.appliesTo = dash.ScriptTestCase
ScriptTestCaseMixin.Class = ScriptTestCaseImpl

export const fromPointer = createFactory<ScriptTestCase>([TestCaseMixin, ScriptMixin, ScriptTestCaseMixin], { types: [dash.ScriptTestCase] });
