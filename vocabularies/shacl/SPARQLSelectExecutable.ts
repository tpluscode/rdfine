import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { SPARQLExecutableMixin } from './SPARQLExecutable';

export interface SPARQLSelectExecutable extends Sh.SPARQLExecutable, RdfResource {
  select: string;
}

export function SPARQLSelectExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLSelectExecutableClass extends SPARQLExecutableMixin(Resource) implements SPARQLSelectExecutable {
    @property.literal()
    select!: string;
  }
  return SPARQLSelectExecutableClass
}

class SPARQLSelectExecutableImpl extends SPARQLSelectExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLSelectExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLSelectExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLSelectExecutableMixin, SPARQLExecutableMixin];
}
SPARQLSelectExecutableMixin.appliesTo = sh.SPARQLSelectExecutable
SPARQLSelectExecutableMixin.Class = SPARQLSelectExecutableImpl
