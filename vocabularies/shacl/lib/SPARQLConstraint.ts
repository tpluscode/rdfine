import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable.js';

export interface SPARQLConstraint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLSelectExecutable<D>, rdfine.RdfResource<D> {
}

export function SPARQLConstraintMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SPARQLConstraint> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class SPARQLConstraintClass extends SPARQLSelectExecutableMixin(Resource) implements Partial<SPARQLConstraint> {
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

export const fromPointer = createFactory<SPARQLConstraint>([SPARQLSelectExecutableMixin, SPARQLConstraintMixin], { types: [sh.SPARQLConstraint] });
