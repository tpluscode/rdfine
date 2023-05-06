import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ScriptMixin } from './Script.js';

export interface IncludedScript<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, RdfResource<D> {
}

export function IncludedScriptMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<IncludedScript> & RdfResourceCore> & Base {
  @namespace(dash)
  class IncludedScriptClass extends ScriptMixin(Resource) implements Partial<IncludedScript> {
  }
  return IncludedScriptClass
}

class IncludedScriptImpl extends IncludedScriptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IncludedScript>) {
    super(arg, init)
    this.types.add(dash.IncludedScript)
  }

  static readonly __mixins: Mixin[] = [IncludedScriptMixin, ScriptMixin];
}
IncludedScriptMixin.appliesTo = dash.IncludedScript
IncludedScriptMixin.Class = IncludedScriptImpl

export const fromPointer = createFactory<IncludedScript>([ScriptMixin, IncludedScriptMixin], { types: [dash.IncludedScript] });
