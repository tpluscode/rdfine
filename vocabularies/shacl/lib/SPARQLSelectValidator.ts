import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable';
import { ValidatorMixin } from './Validator';

export interface SPARQLSelectValidator<ID extends ResourceNode = ResourceNode> extends Sh.SPARQLSelectExecutable<ID>, Sh.Validator<ID>, RdfResource<ID> {
  resultAnnotation: Sh.ResultAnnotation<SiblingNode<ID>> | undefined;
}

export function SPARQLSelectValidatorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLSelectValidatorClass extends ValidatorMixin(SPARQLSelectExecutableMixin(Resource)) implements SPARQLSelectValidator {
    @property.resource({ implicitTypes: [sh.ResultAnnotation] })
    resultAnnotation: Sh.ResultAnnotation | undefined;
  }
  return SPARQLSelectValidatorClass
}

class SPARQLSelectValidatorImpl extends SPARQLSelectValidatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLSelectValidator>) {
    super(arg, init)
    this.types.add(sh.SPARQLSelectValidator)
  }

  static readonly __mixins: Mixin[] = [SPARQLSelectValidatorMixin, SPARQLSelectExecutableMixin, ValidatorMixin];
}
SPARQLSelectValidatorMixin.appliesTo = sh.SPARQLSelectValidator
SPARQLSelectValidatorMixin.Class = SPARQLSelectValidatorImpl
