import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable.js';
import { ValidatorMixin } from './Validator.js';

export interface SPARQLAskValidator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLAskExecutable<D>, Sh.Validator<D>, RdfResource<D> {
}

export function SPARQLAskValidatorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLAskValidator> & RdfResourceCore> & Base {
  @namespace(sh)
  class SPARQLAskValidatorClass extends ValidatorMixin(SPARQLAskExecutableMixin(Resource)) implements Partial<SPARQLAskValidator> {
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

export const fromPointer = createFactory<SPARQLAskValidator>([ValidatorMixin, SPARQLAskExecutableMixin, SPARQLAskValidatorMixin], { types: [sh.SPARQLAskValidator] });
