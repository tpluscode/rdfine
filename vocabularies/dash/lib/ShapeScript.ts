import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ScriptMixin } from './Script';

export interface ShapeScript<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, RdfResource<D> {
}

export function ShapeScriptMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ShapeScript> & RdfResourceCore> & Base {
  @namespace(dash)
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
