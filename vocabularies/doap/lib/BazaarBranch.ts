import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface BazaarBranch<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, rdfine.RdfResource<D> {
}

export function BazaarBranchMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BazaarBranch> & RdfResourceCore> & Base {
  @rdfine.namespace(doap)
  class BazaarBranchClass extends RepositoryMixin(Resource) implements Partial<BazaarBranch> {
  }
  return BazaarBranchClass
}

class BazaarBranchImpl extends BazaarBranchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BazaarBranch>) {
    super(arg, init)
    this.types.add(doap.BazaarBranch)
  }

  static readonly __mixins: Mixin[] = [BazaarBranchMixin, RepositoryMixin];
}
BazaarBranchMixin.appliesTo = doap.BazaarBranch
BazaarBranchMixin.Class = BazaarBranchImpl

export const fromPointer = createFactory<BazaarBranch>([RepositoryMixin, BazaarBranchMixin], { types: [doap.BazaarBranch] });
