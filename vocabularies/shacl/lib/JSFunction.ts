import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { FunctionMixin } from './Function';
import { JSExecutableMixin } from './JSExecutable';

export interface JSFunction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Function<D>, Sh.JSExecutable<D>, RdfResource<D> {
}

export function JSFunctionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JSFunction> & RdfResourceCore> & Base {
  @namespace(sh)
  class JSFunctionClass extends JSExecutableMixin(FunctionMixin(Resource)) implements Partial<JSFunction> {
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

export const fromPointer = createFactory<JSFunction>([JSExecutableMixin, FunctionMixin, JSFunctionMixin], { types: [sh.JSFunction] });
