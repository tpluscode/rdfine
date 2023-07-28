import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface GitBranch<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, rdfine.RdfResource<D> {
}

export function GitBranchMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GitBranch & RdfResourceCore> & Base {
  @rdfine.namespace(doap)
  class GitBranchClass extends RepositoryMixin(Resource) {
  }
  return GitBranchClass as any
}

class GitBranchImpl extends GitBranchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GitBranch>) {
    super(arg, init)
    this.types.add(doap.GitBranch)
  }

  static readonly __mixins: Mixin[] = [GitBranchMixin, RepositoryMixin];
}
GitBranchMixin.appliesTo = doap.GitBranch
GitBranchMixin.Class = GitBranchImpl

export const fromPointer = createFactory<GitBranch>([RepositoryMixin, GitBranchMixin], { types: [doap.GitBranch] });
