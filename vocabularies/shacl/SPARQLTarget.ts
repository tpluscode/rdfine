import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import SPARQLAskExecutableMixin from './SPARQLAskExecutable';
import SPARQLSelectExecutableMixin from './SPARQLSelectExecutable';
import TargetMixin from './Target';

export interface SPARQLTarget extends Sh.SPARQLAskExecutable, Sh.SPARQLSelectExecutable, Sh.Target, RdfResource {
}

export default function SPARQLTargetMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLTargetClass extends TargetMixin(SPARQLSelectExecutableMixin(SPARQLAskExecutableMixin(Resource))) implements SPARQLTarget {
  }
  return SPARQLTargetClass
}

class SPARQLTargetImpl extends SPARQLTargetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLTarget>) {
    super(arg, init)
    this.types.add(sh.SPARQLTarget)
  }
}
SPARQLTargetMixin.shouldApply = (r: RdfResource) => r.types.has(sh.SPARQLTarget)
SPARQLTargetMixin.Class = SPARQLTargetImpl
