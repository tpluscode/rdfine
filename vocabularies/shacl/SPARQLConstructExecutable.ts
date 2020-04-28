import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import SPARQLExecutableMixin from './SPARQLExecutable';

export interface SPARQLConstructExecutable extends Sh.SPARQLExecutable, RdfResource {
  construct: string;
}

export default function SPARQLConstructExecutableMixin<Base extends Constructor>(Resource: Base) {
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
}
SPARQLConstructExecutableMixin.shouldApply = (r: RdfResource) => r.types.has(sh.SPARQLConstructExecutable)
SPARQLConstructExecutableMixin.Class = SPARQLConstructExecutableImpl
