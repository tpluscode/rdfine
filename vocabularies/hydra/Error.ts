import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import { StatusMixin } from './Status';

export interface Error extends Hydra.Status, RdfResource {
}

export function ErrorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class ErrorClass extends StatusMixin(Resource) implements Error {
  }
  return ErrorClass
}

class ErrorImpl extends ErrorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Error>) {
    super(arg, init)
    this.types.add(hydra.Error)
  }

  static readonly __mixins: Mixin[] = [ErrorMixin, StatusMixin];
}
ErrorMixin.appliesTo = hydra.Error
ErrorMixin.Class = ErrorImpl
