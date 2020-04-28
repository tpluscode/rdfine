import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import SPARQLExecutableMixin from './SPARQLExecutable';

export interface SPARQLAskExecutable extends Sh.SPARQLExecutable, RdfResource {
  ask: string;
}

export default function SPARQLAskExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLAskExecutableClass extends SPARQLExecutableMixin(Resource) implements SPARQLAskExecutable {
    @property.literal()
    ask!: string;
  }
  return SPARQLAskExecutableClass
}

class SPARQLAskExecutableImpl extends SPARQLAskExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLAskExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLAskExecutable)
  }
}
SPARQLAskExecutableMixin.shouldApply = (r: RdfResource) => r.types.has(sh.SPARQLAskExecutable)
SPARQLAskExecutableMixin.Class = SPARQLAskExecutableImpl
