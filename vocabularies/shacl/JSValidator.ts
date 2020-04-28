import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import JSExecutableMixin from './JSExecutable';
import ValidatorMixin from './Validator';

export interface JSValidator extends Sh.JSExecutable, Sh.Validator, RdfResource {
}

export default function JSValidatorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSValidatorClass extends ValidatorMixin(JSExecutableMixin(Resource)) implements JSValidator {
  }
  return JSValidatorClass
}

class JSValidatorImpl extends JSValidatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSValidator>) {
    super(arg, init)
    this.types.add(sh.JSValidator)
  }
}
JSValidatorMixin.shouldApply = (r: RdfResource) => r.types.has(sh.JSValidator)
JSValidatorMixin.Class = JSValidatorImpl
