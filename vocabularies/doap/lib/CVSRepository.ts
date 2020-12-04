import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface CVSRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
  module: RDF.Term | undefined;
}

export function CVSRepositoryMixin<Base extends Constructor>(Resource: Base): Constructor<CVSRepository> & Base {
  @namespace(doap)
  class CVSRepositoryClass extends RepositoryMixin(Resource) implements CVSRepository {
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
