import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '.';

export interface Repository<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  'anon-root': RDF.Literal | undefined;
  browse: RDF.Term | undefined;
  location: RDF.Term | undefined;
  repositoryOf: Doap.Project<D> | undefined;
}

export function RepositoryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class RepositoryClass extends Resource implements Repository {
    @property()
    'anon-root': RDF.Literal | undefined;
    @property()
    browse: RDF.Term | undefined;
    @property()
    location: RDF.Term | undefined;
    @property.resource({ implicitTypes: [doap.Project] })
    repositoryOf: Doap.Project | undefined;
  }
  return RepositoryClass
}

class RepositoryImpl extends RepositoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Repository>) {
    super(arg, init)
    this.types.add(doap.Repository)
  }

  static readonly __mixins: Mixin[] = [RepositoryMixin];
}
RepositoryMixin.appliesTo = doap.Repository
RepositoryMixin.Class = RepositoryImpl