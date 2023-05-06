import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable.js';
import { ValidatorMixin } from './Validator.js';

export interface SPARQLSelectValidator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLSelectExecutable<D>, Sh.Validator<D>, RdfResource<D> {
  resultAnnotation: Sh.ResultAnnotation<D> | undefined;
}

export function SPARQLSelectValidatorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLSelectValidator> & RdfResourceCore> & Base {
  @namespace(sh)
  class SPARQLSelectValidatorClass extends ValidatorMixin(SPARQLSelectExecutableMixin(Resource)) implements Partial<SPARQLSelectValidator> {
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

export const fromPointer = createFactory<SPARQLSelectValidator>([ValidatorMixin, SPARQLSelectExecutableMixin, SPARQLSelectValidatorMixin], { types: [sh.SPARQLSelectValidator] });
