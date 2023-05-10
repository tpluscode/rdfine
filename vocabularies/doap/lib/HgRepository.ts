import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface HgRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, rdfine.RdfResource<D> {
}

export function HgRepositoryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HgRepository> & RdfResourceCore> & Base {
  @rdfine.namespace(doap)
  class HgRepositoryClass extends RepositoryMixin(Resource) implements Partial<HgRepository> {
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

export const fromPointer = createFactory<HgRepository>([RepositoryMixin, HgRepositoryMixin], { types: [doap.HgRepository] });
