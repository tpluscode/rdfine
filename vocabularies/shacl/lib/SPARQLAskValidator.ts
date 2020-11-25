import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable';
import { ValidatorMixin } from './Validator';

export interface SPARQLAskValidator<ID extends ResourceNode = ResourceNode> extends Sh.SPARQLAskExecutable<ID>, Sh.Validator<ID>, RdfResource<ID> {
}

export function SPARQLAskValidatorMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [SPARQLAskValidatorMixin, SPARQLAskExecutableMixin, ValidatorMixin];
}
SPARQLAskValidatorMixin.appliesTo = sh.SPARQLAskValidator
SPARQLAskValidatorMixin.Class = SPARQLAskValidatorImpl
