import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable';
import { TargetMixin } from './Target';

export interface SPARQLTarget<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLAskExecutable<D>, Sh.SPARQLSelectExecutable<D>, Sh.Target<D>, RdfResource<D> {
}

export function SPARQLTargetMixin<Base extends Constructor>(Resource: Base): Constructor<SPARQLTarget> & Base {
  @namespace(sh)
  class SPARQLTargetClass extends TargetMixin(SPARQLSelectExecutableMixin(SPARQLAskExecutableMixin(Resource))) implements Partial<SPARQLTarget> {
  }
  return SPARQLTargetClass
}

class SPARQLTargetImpl extends SPARQLTargetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLTarget>) {
    super(arg, init)
    this.types.add(sh.SPARQLTarget)
  }

  static readonly __mixins: Mixin[] = [SPARQLTargetMixin, SPARQLAskExecutableMixin, SPARQLSelectExecutableMixin, TargetMixin];
}
SPARQLTargetMixin.appliesTo = sh.SPARQLTarget
SPARQLTargetMixin.Class = SPARQLTargetImpl
