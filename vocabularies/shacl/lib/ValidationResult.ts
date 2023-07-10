import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { AbstractResultMixin } from './AbstractResult.js';

export interface ValidationResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.AbstractResult<D>, rdfine.RdfResource<D> {
}

export function ValidationResultMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ValidationResult & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class ValidationResultClass extends AbstractResultMixin(Resource) {
  }
  return ValidationResultClass as any
}

class ValidationResultImpl extends ValidationResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ValidationResult>) {
    super(arg, init)
    this.types.add(sh.ValidationResult)
  }

  static readonly __mixins: Mixin[] = [ValidationResultMixin, AbstractResultMixin];
}
ValidationResultMixin.appliesTo = sh.ValidationResult
ValidationResultMixin.Class = ValidationResultImpl

export const fromPointer = createFactory<ValidationResult>([AbstractResultMixin, ValidationResultMixin], { types: [sh.ValidationResult] });
