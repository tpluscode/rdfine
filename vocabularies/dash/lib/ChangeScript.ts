import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ScriptMixin } from './Script.js';

export interface ChangeScript<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, rdfine.RdfResource<D> {
}

export function ChangeScriptMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ChangeScript & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ChangeScriptClass extends ScriptMixin(Resource) {
  }
  return ChangeScriptClass as any
}

class ChangeScriptImpl extends ChangeScriptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChangeScript>) {
    super(arg, init)
    this.types.add(dash.ChangeScript)
  }

  static readonly __mixins: Mixin[] = [ChangeScriptMixin, ScriptMixin];
}
ChangeScriptMixin.appliesTo = dash.ChangeScript
ChangeScriptMixin.Class = ChangeScriptImpl

export const fromPointer = createFactory<ChangeScript>([ScriptMixin, ChangeScriptMixin], { types: [dash.ChangeScript] });
