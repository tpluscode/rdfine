import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface HgRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
}

export function HgRepositoryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HgRepository> & RdfResourceCore> & Base {
  @namespace(doap)
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
