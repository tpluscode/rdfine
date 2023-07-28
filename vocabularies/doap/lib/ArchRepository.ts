import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface ArchRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, rdfine.RdfResource<D> {
  module: RDF.Term | undefined;
}

export function ArchRepositoryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ArchRepository & RdfResourceCore> & Base {
  @rdfine.namespace(doap)
  class ArchRepositoryClass extends RepositoryMixin(Resource) {
    @rdfine.property()
    module: RDF.Term | undefined;
  }
  return ArchRepositoryClass as any
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

export const fromPointer = createFactory<ArchRepository>([RepositoryMixin, ArchRepositoryMixin], { types: [doap.ArchRepository] });
