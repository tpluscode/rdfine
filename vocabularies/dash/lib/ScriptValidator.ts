import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { ScriptMixin } from './Script.js';
import { ValidatorMixin as ShaclValidatorMixin } from '@rdfine/shacl/lib/Validator';

export interface ScriptValidator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, Shacl.Validator<D>, rdfine.RdfResource<D> {
}

export function ScriptValidatorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ScriptValidator & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ScriptValidatorClass extends ShaclValidatorMixin(ScriptMixin(Resource)) {
  }
  return ScriptValidatorClass as any
}

class ScriptValidatorImpl extends ScriptValidatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScriptValidator>) {
    super(arg, init)
    this.types.add(dash.ScriptValidator)
  }

  static readonly __mixins: Mixin[] = [ScriptValidatorMixin, ScriptMixin, ShaclValidatorMixin];
}
ScriptValidatorMixin.appliesTo = dash.ScriptValidator
ScriptValidatorMixin.Class = ScriptValidatorImpl

export const fromPointer = createFactory<ScriptValidator>([ShaclValidatorMixin, ScriptMixin, ScriptValidatorMixin], { types: [dash.ScriptValidator] });
