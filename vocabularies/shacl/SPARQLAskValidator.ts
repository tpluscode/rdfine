import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import SPARQLAskExecutableMixin from './SPARQLAskExecutable';
import ValidatorMixin from './Validator';

export interface SPARQLAskValidator extends Sh.SPARQLAskExecutable, Sh.Validator, RdfResource {
}

export default function SPARQLAskValidatorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLAskValidatorClass extends ValidatorMixin(SPARQLAskExecutableMixin(Resource)) implements SPARQLAskValidator {
  }
  return SPARQLAskValidatorClass
}

class SPARQLAskValidatorImpl extends SPARQLAskValidatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLAskValidator>) {
    super(arg, init)
    this.types.add(sh.SPARQLAskValidator)
  }
}
SPARQLAskValidatorMixin.shouldApply = (r: RdfResource) => r.types.has(sh.SPARQLAskValidator)
SPARQLAskValidatorMixin.Class = SPARQLAskValidatorImpl
