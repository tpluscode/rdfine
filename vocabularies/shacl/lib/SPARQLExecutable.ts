import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Owl from '@rdfine/owl';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { OntologyMixin as OwlOntologyMixin } from '@rdfine/owl/lib/Ontology';

export interface SPARQLExecutable<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  prefixes: Owl.Ontology<D> | undefined;
}

export function SPARQLExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLExecutableClass extends RdfsResourceMixin(Resource) implements SPARQLExecutable {
    @property.resource({ as: [OwlOntologyMixin] })
    prefixes: Owl.Ontology | undefined;
  }
  return SPARQLExecutableClass
}

class SPARQLExecutableImpl extends SPARQLExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLExecutableMixin, RdfsResourceMixin];
}
SPARQLExecutableMixin.appliesTo = sh.SPARQLExecutable
SPARQLExecutableMixin.Class = SPARQLExecutableImpl
