import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface DarcsRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, rdfine.RdfResource<D> {
}

export function DarcsRepositoryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DarcsRepository & RdfResourceCore> & Base {
  @rdfine.namespace(doap)
  class DarcsRepositoryClass extends RepositoryMixin(Resource) {
  }
  return DarcsRepositoryClass as any
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

export const fromPointer = createFactory<DarcsRepository>([RepositoryMixin, DarcsRepositoryMixin], { types: [doap.DarcsRepository] });
