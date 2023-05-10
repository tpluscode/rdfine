import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import { StatusMixin } from './Status.js';

export interface Error<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Status<D>, rdfine.RdfResource<D> {
}

export function ErrorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Error> & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class ErrorClass extends StatusMixin(Resource) implements Partial<Error> {
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

export const fromPointer = createFactory<Error>([StatusMixin, ErrorMixin], { types: [hydra.Error] });
