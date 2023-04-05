import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface CVSRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
  module: RDF.Term | undefined;
}

export function CVSRepositoryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CVSRepository> & RdfResourceCore> & Base {
  @namespace(doap)
  class CVSRepositoryClass extends RepositoryMixin(Resource) implements Partial<CVSRepository> {
    @property()
    module: RDF.Term | undefined;
  }
  return CVSRepositoryClass
}

class CVSRepositoryImpl extends CVSRepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CVSRepository>) {
    super(arg, init)
    this.types.add(doap.CVSRepository)
  }

  static readonly __mixins: Mixin[] = [CVSRepositoryMixin, RepositoryMixin];
}
CVSRepositoryMixin.appliesTo = doap.CVSRepository
CVSRepositoryMixin.Class = CVSRepositoryImpl

export const fromPointer = createFactory<CVSRepository>([RepositoryMixin, CVSRepositoryMixin], { types: [doap.CVSRepository] });
