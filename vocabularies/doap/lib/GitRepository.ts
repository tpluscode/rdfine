import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface GitRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
}

export function GitRepositoryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GitRepository> & RdfResourceCore> & Base {
  @namespace(doap)
  class GitRepositoryClass extends RepositoryMixin(Resource) implements Partial<GitRepository> {
  }
  return GitRepositoryClass
}

class GitRepositoryImpl extends GitRepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GitRepository>) {
    super(arg, init)
    this.types.add(doap.GitRepository)
  }

  static readonly __mixins: Mixin[] = [GitRepositoryMixin, RepositoryMixin];
}
GitRepositoryMixin.appliesTo = doap.GitRepository
GitRepositoryMixin.Class = GitRepositoryImpl

export const fromPointer = createFactory<GitRepository>([RepositoryMixin, GitRepositoryMixin], { types: [doap.GitRepository] });
