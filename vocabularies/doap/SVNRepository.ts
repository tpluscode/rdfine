import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '.';
import { RepositoryMixin } from './Repository';

export interface SVNRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, RdfResource<D> {
}

export function SVNRepositoryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class SVNRepositoryClass extends RepositoryMixin(Resource) implements SVNRepository {
  }
  return SVNRepositoryClass
}

class SVNRepositoryImpl extends SVNRepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SVNRepository>) {
    super(arg, init)
    this.types.add(doap.SVNRepository)
  }

  static readonly __mixins: Mixin[] = [SVNRepositoryMixin, RepositoryMixin];
}
SVNRepositoryMixin.appliesTo = doap.SVNRepository
SVNRepositoryMixin.Class = SVNRepositoryImpl