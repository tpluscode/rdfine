import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface ArchRepository<ID extends ResourceNode = ResourceNode> extends Doap.Repository<ID>, RdfResource<ID> {
  module: RDF.Term | undefined;
}

export function ArchRepositoryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class ArchRepositoryClass extends RepositoryMixin(Resource) implements ArchRepository {
    @property()
    module: RDF.Term | undefined;
  }
  return ArchRepositoryClass
}

class ArchRepositoryImpl extends ArchRepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ArchRepository>) {
    super(arg, init)
    this.types.add(doap.ArchRepository)
  }

  static readonly __mixins: Mixin[] = [ArchRepositoryMixin, RepositoryMixin];
}
ArchRepositoryMixin.appliesTo = doap.ArchRepository
ArchRepositoryMixin.Class = ArchRepositoryImpl
