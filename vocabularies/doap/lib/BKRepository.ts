import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import { RepositoryMixin } from './Repository';

export interface BKRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
  module: RDF.Term | undefined;
}

export function BKRepositoryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BKRepository> & RdfResourceCore> & Base {
  @namespace(doap)
  class BKRepositoryClass extends RepositoryMixin(Resource) implements Partial<BKRepository> {
    @property()
    module: RDF.Term | undefined;
  }
  return BKRepositoryClass
}

class BKRepositoryImpl extends BKRepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BKRepository>) {
    super(arg, init)
    this.types.add(doap.BKRepository)
  }

  static readonly __mixins: Mixin[] = [BKRepositoryMixin, RepositoryMixin];
}
BKRepositoryMixin.appliesTo = doap.BKRepository
BKRepositoryMixin.Class = BKRepositoryImpl

export const fromPointer = createFactory<BKRepository>([RepositoryMixin, BKRepositoryMixin], { types: [doap.BKRepository] });
