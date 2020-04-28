import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import JSExecutableMixin from './JSExecutable';
import TargetTypeMixin from './TargetType';

export interface JSTargetType extends Sh.JSExecutable, Sh.TargetType, RdfResource {
}

export default function JSTargetTypeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSTargetTypeClass extends TargetTypeMixin(JSExecutableMixin(Resource)) implements JSTargetType {
  }
  return JSTargetTypeClass
}

class JSTargetTypeImpl extends JSTargetTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSTargetType>) {
    super(arg, init)
    this.types.add(sh.JSTargetType)
  }
}
JSTargetTypeMixin.shouldApply = (r: RdfResource) => r.types.has(sh.JSTargetType)
JSTargetTypeMixin.Class = JSTargetTypeImpl
