import '../extensions/sh/Function.js';
import { FunctionMixinEx } from '../extensions/sh/Function.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { FunctionMixin as ShaclFunctionMixin } from '@rdfine/shacl/lib/Function';
import { ScriptMixin } from './Script.js';

export interface ScriptFunction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.Function<D>, Dash.Script<D>, rdfine.RdfResource<D> {
}

export function ScriptFunctionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ScriptFunction & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ScriptFunctionClass extends ScriptMixin(FunctionMixinEx(ShaclFunctionMixin(Resource))) {
  }
  return ScriptFunctionClass as any
}

class ScriptFunctionImpl extends ScriptFunctionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScriptFunction>) {
    super(arg, init)
    this.types.add(dash.ScriptFunction)
  }

  static readonly __mixins: Mixin[] = [ScriptFunctionMixin, ShaclFunctionMixin, ScriptMixin];
}
ScriptFunctionMixin.appliesTo = dash.ScriptFunction
ScriptFunctionMixin.Class = ScriptFunctionImpl

export const fromPointer = createFactory<ScriptFunction>([ScriptMixin, ShaclFunctionMixin, ScriptFunctionMixin], { types: [dash.ScriptFunction] });
