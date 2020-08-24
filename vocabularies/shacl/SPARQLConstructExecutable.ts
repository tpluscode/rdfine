import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { SPARQLExecutableMixin } from './SPARQLExecutable';

export interface SPARQLConstructExecutable extends Sh.SPARQLExecutable, RdfResource {
  construct: string;
}

export function SPARQLConstructExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLConstructExecutableClass extends SPARQLExecutableMixin(Resource) implements SPARQLConstructExecutable {
    @property.literal()
    construct!: string;
  }
  return SPARQLConstructExecutableClass
}

class SPARQLConstructExecutableImpl extends SPARQLConstructExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLConstructExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLConstructExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLConstructExecutableMixin, SPARQLExecutableMixin];
}
SPARQLConstructExecutableMixin.appliesTo = sh.SPARQLConstructExecutable
SPARQLConstructExecutableMixin.Class = SPARQLConstructExecutableImpl
