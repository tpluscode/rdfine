import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import { JSExecutableMixin } from './JSExecutable';

export interface JSConstraint extends Sh.JSExecutable, RdfResource {
}

export function JSConstraintMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSConstraintClass extends JSExecutableMixin(Resource) implements JSConstraint {
  }
  return JSConstraintClass
}

class JSConstraintImpl extends JSConstraintMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSConstraint>) {
    super(arg, init)
    this.types.add(sh.JSConstraint)
  }
}
JSConstraintMixin.shouldApply = (r: RdfResource) => r.types.has(sh.JSConstraint)
JSConstraintMixin.Class = JSConstraintImpl
