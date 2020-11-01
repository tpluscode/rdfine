import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '.';
import { RepositoryMixin } from './Repository';

export interface BazaarBranch<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
}

export function BazaarBranchMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class BazaarBranchClass extends RepositoryMixin(Resource) implements BazaarBranch {
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
