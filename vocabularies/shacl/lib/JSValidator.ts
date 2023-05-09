import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { JSExecutableMixin } from './JSExecutable.js';
import { ValidatorMixin } from './Validator.js';

export interface JSValidator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, Sh.Validator<D>, rdfine.RdfResource<D> {
}

export function JSValidatorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<JSValidator> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class JSValidatorClass extends ValidatorMixin(JSExecutableMixin(Resource)) implements Partial<JSValidator> {
  }
  return JSValidatorClass
}

class JSValidatorImpl extends JSValidatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSValidator>) {
    super(arg, init)
    this.types.add(sh.JSValidator)
  }

  static readonly __mixins: Mixin[] = [JSValidatorMixin, JSExecutableMixin, ValidatorMixin];
}
JSValidatorMixin.appliesTo = sh.JSValidator
JSValidatorMixin.Class = JSValidatorImpl

export const fromPointer = createFactory<JSValidator>([ValidatorMixin, JSExecutableMixin, JSValidatorMixin], { types: [sh.JSValidator] });
