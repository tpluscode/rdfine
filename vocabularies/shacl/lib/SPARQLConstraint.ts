import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable';

export interface SPARQLConstraint<ID extends ResourceNode = ResourceNode> extends Sh.SPARQLSelectExecutable<ID>, RdfResource<ID> {
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
