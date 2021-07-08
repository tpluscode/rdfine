import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ScriptMixin } from './Script';

export interface ScriptConstraint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, RdfResource<D> {
}

export function ScriptConstraintMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ScriptConstraint> & RdfResourceCore> & Base {
  @namespace(dash)
  class ScriptConstraintClass extends ScriptMixin(Resource) implements Partial<ScriptConstraint> {
  }
  return ScriptConstraintClass
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
