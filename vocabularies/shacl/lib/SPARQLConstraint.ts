import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable';

export interface SPARQLConstraint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLSelectExecutable<D>, RdfResource<D> {
}

export function SPARQLConstraintMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLConstraint> & RdfResourceCore> & Base {
  @namespace(sh)
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
