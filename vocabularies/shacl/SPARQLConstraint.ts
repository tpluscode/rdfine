import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable';

export interface SPARQLConstraint extends Sh.SPARQLSelectExecutable, RdfResource {
}

export function SPARQLConstraintMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLConstraintClass extends SPARQLSelectExecutableMixin(Resource) implements SPARQLConstraint {
  }
  return SPARQLConstraintClass
}

class SPARQLConstraintImpl extends SPARQLConstraintMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLConstraint>) {
    super(arg, init)
    this.types.add(sh.SPARQLConstraint)
  }

  static readonly __mixins: Mixin[] = [SPARQLConstraintMixin, SPARQLSelectExecutableMixin];
}
SPARQLConstraintMixin.appliesTo = sh.SPARQLConstraint
SPARQLConstraintMixin.Class = SPARQLConstraintImpl
