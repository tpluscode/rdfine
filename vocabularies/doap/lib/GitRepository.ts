import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface GitRepository<ID extends ResourceNode = ResourceNode> extends Doap.Repository<ID>, RdfResource<ID> {
}

export function GitRepositoryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class GitRepositoryClass extends RepositoryMixin(Resource) implements GitRepository {
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
