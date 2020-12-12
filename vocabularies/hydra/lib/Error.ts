import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import { StatusMixin } from './Status';

export interface Error<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Status<D>, RdfResource<D> {
}

export function ErrorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Error> & RdfResourceCore> & Base {
  @namespace(hydra)
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
