import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { ScriptMixin } from './Script';
import { ValidatorMixin as ShaclValidatorMixin } from '@rdfine/shacl/lib/Validator';

export interface ScriptValidator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, Shacl.Validator<D>, RdfResource<D> {
}

export function ScriptValidatorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ScriptValidator> & RdfResourceCore> & Base {
  @namespace(dash)
  class ScriptValidatorClass extends ShaclValidatorMixin(ScriptMixin(Resource)) implements Partial<ScriptValidator> {
  }
  return ScriptValidatorClass
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
