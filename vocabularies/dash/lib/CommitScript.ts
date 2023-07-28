import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ScriptMixin } from './Script.js';

export interface CommitScript<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, rdfine.RdfResource<D> {
}

export function CommitScriptMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CommitScript & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class CommitScriptClass extends ScriptMixin(Resource) {
  }
  return CommitScriptClass as any
}

class CommitScriptImpl extends CommitScriptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CommitScript>) {
    super(arg, init)
    this.types.add(dash.CommitScript)
  }

  static readonly __mixins: Mixin[] = [CommitScriptMixin, ScriptMixin];
}
CommitScriptMixin.appliesTo = dash.CommitScript
CommitScriptMixin.Class = CommitScriptImpl

export const fromPointer = createFactory<CommitScript>([ScriptMixin, CommitScriptMixin], { types: [dash.CommitScript] });
