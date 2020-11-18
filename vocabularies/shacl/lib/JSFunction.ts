import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { FunctionMixin } from './Function';
import { JSExecutableMixin } from './JSExecutable';

export interface JSFunction<ID extends ResourceNode = ResourceNode> extends Sh.Function<ID>, Sh.JSExecutable<ID>, RdfResource<ID> {
}

export function JSFunctionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSFunctionClass extends JSExecutableMixin(FunctionMixin(Resource)) implements JSFunction {
  }
  return JSFunctionClass
}

class JSFunctionImpl extends JSFunctionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSFunction>) {
    super(arg, init)
    this.types.add(sh.JSFunction)
  }

  static readonly __mixins: Mixin[] = [JSFunctionMixin, FunctionMixin, JSExecutableMixin];
}
JSFunctionMixin.appliesTo = sh.JSFunction
JSFunctionMixin.Class = JSFunctionImpl
