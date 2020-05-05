import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { SPARQLExecutableMixin } from './SPARQLExecutable';

export interface SPARQLUpdateExecutable extends Sh.SPARQLExecutable, RdfResource {
  update: string;
}

export function SPARQLUpdateExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLUpdateExecutableClass extends SPARQLExecutableMixin(Resource) implements SPARQLUpdateExecutable {
    @property.literal()
    update!: string;
  }
  return SPARQLUpdateExecutableClass
}

class SPARQLUpdateExecutableImpl extends SPARQLUpdateExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLUpdateExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLUpdateExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLUpdateExecutableMixin, SPARQLExecutableMixin];
}
SPARQLUpdateExecutableMixin.appliesTo = sh.SPARQLUpdateExecutable
SPARQLUpdateExecutableMixin.Class = SPARQLUpdateExecutableImpl
