import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable';
import { ValidatorMixin } from './Validator';

export interface SPARQLSelectValidator extends Sh.SPARQLSelectExecutable, Sh.Validator, RdfResource {
  resultAnnotation: Sh.ResultAnnotation;
}

export function SPARQLSelectValidatorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLSelectValidatorClass extends ValidatorMixin(SPARQLSelectExecutableMixin(Resource)) implements SPARQLSelectValidator {
    @property.resource({ implicitTypes: [sh.ResultAnnotation] })
    resultAnnotation!: Sh.ResultAnnotation;
  }
  return SPARQLSelectValidatorClass
}

class SPARQLSelectValidatorImpl extends SPARQLSelectValidatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLSelectValidator>) {
    super(arg, init)
    this.types.add(sh.SPARQLSelectValidator)
  }
}
SPARQLSelectValidatorMixin.shouldApply = (r: RdfResource) => r.types.has(sh.SPARQLSelectValidator)
SPARQLSelectValidatorMixin.Class = SPARQLSelectValidatorImpl
