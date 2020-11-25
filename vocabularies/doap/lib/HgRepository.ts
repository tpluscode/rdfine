import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface HgRepository<ID extends ResourceNode = ResourceNode> extends Doap.Repository<ID>, RdfResource<ID> {
}

export function HgRepositoryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class HgRepositoryClass extends RepositoryMixin(Resource) implements HgRepository {
  }
  return HgRepositoryClass
}

class HgRepositoryImpl extends HgRepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HgRepository>) {
    super(arg, init)
    this.types.add(doap.HgRepository)
  }

  static readonly __mixins: Mixin[] = [HgRepositoryMixin, RepositoryMixin];
}
HgRepositoryMixin.appliesTo = doap.HgRepository
HgRepositoryMixin.Class = HgRepositoryImpl
