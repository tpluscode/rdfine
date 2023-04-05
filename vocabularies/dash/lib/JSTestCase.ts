import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { JSFunctionMixin as ShaclJSFunctionMixin } from '@rdfine/shacl/lib/JSFunction';
import { TestCaseMixin } from './TestCase';

export interface JSTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.JSFunction<D>, Dash.TestCase<D>, RdfResource<D> {
}

export function JSTestCaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JSTestCase> & RdfResourceCore> & Base {
  @namespace(dash)
  class JSTestCaseClass extends TestCaseMixin(ShaclJSFunctionMixin(Resource)) implements Partial<JSTestCase> {
  }
  return JSTestCaseClass
}

class JSTestCaseImpl extends JSTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSTestCase>) {
    super(arg, init)
    this.types.add(dash.JSTestCase)
  }

  static readonly __mixins: Mixin[] = [JSTestCaseMixin, ShaclJSFunctionMixin, TestCaseMixin];
}
JSTestCaseMixin.appliesTo = dash.JSTestCase
JSTestCaseMixin.Class = JSTestCaseImpl

export const fromPointer = createFactory<JSTestCase>([TestCaseMixin, ShaclJSFunctionMixin, JSTestCaseMixin], { types: [dash.JSTestCase] });
