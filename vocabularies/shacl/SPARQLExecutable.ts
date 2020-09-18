import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';
import * as Owl from '@rdfine/owl';

export interface SPARQLExecutable extends Rdfs.Resource, RdfResource {
  prefixes: Owl.Ontology | undefined;
}

export function SPARQLExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLExecutableClass extends Rdfs.ResourceMixin(Resource) implements SPARQLExecutable {
    @property.resource({ as: [Owl.OntologyMixin] })
    prefixes: Owl.Ontology | undefined;
  }
  return SPARQLExecutableClass
}

class SPARQLExecutableImpl extends SPARQLExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLExecutableMixin, Rdfs.ResourceMixin];
}
SPARQLExecutableMixin.appliesTo = sh.SPARQLExecutable
SPARQLExecutableMixin.Class = SPARQLExecutableImpl
