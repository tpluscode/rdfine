import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Doap from '../index.js';
import { RepositoryMixin } from './Repository.js';

export interface SVNRepository<D extends RDF.DatasetCore = RDF.DatasetCore> extends Doap.Repository<D>, rdfine.RdfResource<D> {
}

export function SVNRepositoryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SVNRepository & RdfResourceCore> & Base {
  @rdfine.namespace(doap)
  class SVNRepositoryClass extends RepositoryMixin(Resource) {
  }
  return SVNRepositoryClass as any
}
SVNRepositoryMixin.appliesTo = doap.SVNRepository
SVNRepositoryMixin.createFactory = (env: RdfineEnvironment) => createFactory<SVNRepository>([RepositoryMixin, SVNRepositoryMixin], { types: [doap.SVNRepository] }, env)
