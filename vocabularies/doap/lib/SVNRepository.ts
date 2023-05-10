import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface SVNRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, rdfine.RdfResource<D> {
}

export function SVNRepositoryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SVNRepository> & RdfResourceCore> & Base {
  @rdfine.namespace(doap)
  class SVNRepositoryClass extends RepositoryMixin(Resource) implements Partial<SVNRepository> {
  }
  return SVNRepositoryClass
}

class SVNRepositoryImpl extends SVNRepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SVNRepository>) {
    super(arg, init)
    this.types.add(doap.SVNRepository)
  }

  static readonly __mixins: Mixin[] = [SVNRepositoryMixin, RepositoryMixin];
}
SVNRepositoryMixin.appliesTo = doap.SVNRepository
SVNRepositoryMixin.Class = SVNRepositoryImpl

export const fromPointer = createFactory<SVNRepository>([RepositoryMixin, SVNRepositoryMixin], { types: [doap.SVNRepository] });
