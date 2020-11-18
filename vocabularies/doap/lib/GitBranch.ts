import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface GitBranch<ID extends ResourceNode = ResourceNode> extends Doap.Repository<ID>, RdfResource<ID> {
}

export function GitBranchMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class GitBranchClass extends RepositoryMixin(Resource) implements GitBranch {
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
