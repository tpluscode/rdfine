import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface DarcsRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
}

export function DarcsRepositoryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DarcsRepository> & RdfResourceCore> & Base {
  @namespace(doap)
  class DarcsRepositoryClass extends RepositoryMixin(Resource) implements Partial<DarcsRepository> {
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

export const fromPointer = createFactory<DarcsRepository>([RepositoryMixin, DarcsRepositoryMixin], { types: [doap.DarcsRepository] });
