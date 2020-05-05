import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Owl from '@rdfine/owl';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';
import { OntologyMixin as OwlOntologyMixin } from '@rdfine/owl/Ontology';

export interface SPARQLExecutable extends Rdfs.Resource, RdfResource {
  prefixes: Owl.Ontology;
}

export function SPARQLExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLExecutableClass extends RdfsResourceMixin(Resource) implements SPARQLExecutable {
    @property.resource({ as: [OwlOntologyMixin] })
    prefixes!: Owl.Ontology;
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
