import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ScriptMixin } from './Script.js';

export interface ShapeScript<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, rdfine.RdfResource<D> {
}

export function ShapeScriptMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ShapeScript> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ShapeScriptClass extends ScriptMixin(Resource) implements Partial<ShapeScript> {
  }
  return ShapeScriptClass
}

class ShapeScriptImpl extends ShapeScriptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShapeScript>) {
    super(arg, init)
    this.types.add(dash.ShapeScript)
  }

  static readonly __mixins: Mixin[] = [ShapeScriptMixin, ScriptMixin];
}
ShapeScriptMixin.appliesTo = dash.ShapeScript
ShapeScriptMixin.Class = ShapeScriptImpl

export const fromPointer = createFactory<ShapeScript>([ScriptMixin, ShapeScriptMixin], { types: [dash.ShapeScript] });
