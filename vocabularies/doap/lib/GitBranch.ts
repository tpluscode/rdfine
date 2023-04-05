import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface GitBranch<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
}

export function GitBranchMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GitBranch> & RdfResourceCore> & Base {
  @namespace(doap)
  class GitBranchClass extends RepositoryMixin(Resource) implements Partial<GitBranch> {
  }
  return GitBranchClass
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
