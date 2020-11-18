import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import { StatusMixin } from './Status';

export interface Error<ID extends ResourceNode = ResourceNode> extends Hydra.Status<ID>, RdfResource<ID> {
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
