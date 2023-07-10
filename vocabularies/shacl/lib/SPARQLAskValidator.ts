import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable.js';
import { ValidatorMixin } from './Validator.js';

export interface SPARQLAskValidator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLAskExecutable<D>, Sh.Validator<D>, rdfine.RdfResource<D> {
}

export function SPARQLAskValidatorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SPARQLAskValidator & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class SPARQLAskValidatorClass extends ValidatorMixin(SPARQLAskExecutableMixin(Resource)) {
  }
  return SPARQLAskValidatorClass as any
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

export const fromPointer = createFactory<SPARQLAskValidator>([ValidatorMixin, SPARQLAskExecutableMixin, SPARQLAskValidatorMixin], { types: [sh.SPARQLAskValidator] });
