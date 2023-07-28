import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ScriptMixin } from './Script.js';

export interface ScriptConstraint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, rdfine.RdfResource<D> {
}

export function ScriptConstraintMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ScriptConstraint & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ScriptConstraintClass extends ScriptMixin(Resource) {
  }
  return ScriptConstraintClass as any
}

class ScriptConstraintImpl extends ScriptConstraintMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScriptConstraint>) {
    super(arg, init)
    this.types.add(dash.ScriptConstraint)
  }

  static readonly __mixins: Mixin[] = [ScriptConstraintMixin, ScriptMixin];
}
ScriptConstraintMixin.appliesTo = dash.ScriptConstraint
ScriptConstraintMixin.Class = ScriptConstraintImpl

export const fromPointer = createFactory<ScriptConstraint>([ScriptMixin, ScriptConstraintMixin], { types: [dash.ScriptConstraint] });
