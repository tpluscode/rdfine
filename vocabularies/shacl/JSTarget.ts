import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import { JSExecutableMixin } from './JSExecutable';
import { TargetMixin } from './Target';

export interface JSTarget extends Sh.JSExecutable, Sh.Target, RdfResource {
}

export function JSTargetMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSTargetClass extends TargetMixin(JSExecutableMixin(Resource)) implements JSTarget {
  }
  return JSTargetClass
}

class JSTargetImpl extends JSTargetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSTarget>) {
    super(arg, init)
    this.types.add(sh.JSTarget)
  }
}
JSTargetMixin.shouldApply = (r: RdfResource) => r.types.has(sh.JSTarget)
JSTargetMixin.Class = JSTargetImpl
