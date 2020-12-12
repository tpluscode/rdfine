import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { JSExecutableMixin } from './JSExecutable';
import { ValidatorMixin } from './Validator';

export interface JSValidator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, Sh.Validator<D>, RdfResource<D> {
}

export function JSValidatorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JSValidator> & RdfResourceCore> & Base {
  @namespace(sh)
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
