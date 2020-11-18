import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface DarcsRepository<ID extends ResourceNode = ResourceNode> extends Doap.Repository<ID>, RdfResource<ID> {
}

export function DarcsRepositoryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class DarcsRepositoryClass extends RepositoryMixin(Resource) implements DarcsRepository {
  }
  return DarcsRepositoryClass
}

class DarcsRepositoryImpl extends DarcsRepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DarcsRepository>) {
    super(arg, init)
    this.types.add(doap.DarcsRepository)
  }

  static readonly __mixins: Mixin[] = [DarcsRepositoryMixin, RepositoryMixin];
}
DarcsRepositoryMixin.appliesTo = doap.DarcsRepository
DarcsRepositoryMixin.Class = DarcsRepositoryImpl
