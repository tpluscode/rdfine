import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import SPARQLAskExecutableMixin from './SPARQLAskExecutable';
import SPARQLSelectExecutableMixin from './SPARQLSelectExecutable';
import TargetTypeMixin from './TargetType';

export interface SPARQLTargetType extends Sh.SPARQLAskExecutable, Sh.SPARQLSelectExecutable, Sh.TargetType, RdfResource {
}

export default function SPARQLTargetTypeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SPARQLTargetTypeClass extends TargetTypeMixin(SPARQLSelectExecutableMixin(SPARQLAskExecutableMixin(Resource))) implements SPARQLTargetType {
  }
  return SPARQLTargetTypeClass
}

class SPARQLTargetTypeImpl extends SPARQLTargetTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLTargetType>) {
    super(arg, init)
    this.types.add(sh.SPARQLTargetType)
  }
}
SPARQLTargetTypeMixin.shouldApply = (r: RdfResource) => r.types.has(sh.SPARQLTargetType)
SPARQLTargetTypeMixin.Class = SPARQLTargetTypeImpl
