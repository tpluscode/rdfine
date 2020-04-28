import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import AbstractResultMixin from './AbstractResult';

export interface ValidationResult extends Sh.AbstractResult, RdfResource {
}

export default function ValidationResultMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ValidationResultClass extends AbstractResultMixin(Resource) implements ValidationResult {
  }
  return ValidationResultClass
}

class ValidationResultImpl extends ValidationResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ValidationResult>) {
    super(arg, init)
    this.types.add(sh.ValidationResult)
  }
}
ValidationResultMixin.shouldApply = (r: RdfResource) => r.types.has(sh.ValidationResult)
ValidationResultMixin.Class = ValidationResultImpl
