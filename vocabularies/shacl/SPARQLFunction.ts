import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import FunctionMixin from './Function';
import SPARQLAskExecutableMixin from './SPARQLAskExecutable';
import SPARQLSelectExecutableMixin from './SPARQLSelectExecutable';

export interface SPARQLFunction extends Sh.Function, Sh.SPARQLAskExecutable, Sh.SPARQLSelectExecutable, RdfResource {
}

export default function SPARQLFunctionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLFunctionClass extends SPARQLSelectExecutableMixin(SPARQLAskExecutableMixin(FunctionMixin(Resource))) implements SPARQLFunction {
  }
  return SPARQLFunctionClass
}

class SPARQLFunctionImpl extends SPARQLFunctionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLFunction>) {
    super(arg, init)
    this.types.add(sh.SPARQLFunction)
  }
}
SPARQLFunctionMixin.shouldApply = (r: RdfResource) => r.types.has(sh.SPARQLFunction)
SPARQLFunctionMixin.Class = SPARQLFunctionImpl
