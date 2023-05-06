import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable.js';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable.js';
import { TargetMixin } from './Target.js';

export interface SPARQLTarget<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLAskExecutable<D>, Sh.SPARQLSelectExecutable<D>, Sh.Target<D>, RdfResource<D> {
}

export function SPARQLTargetMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLTarget> & RdfResourceCore> & Base {
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

export const fromPointer = createFactory<SPARQLTarget>([TargetMixin, SPARQLSelectExecutableMixin, SPARQLAskExecutableMixin, SPARQLTargetMixin], { types: [sh.SPARQLTarget] });
