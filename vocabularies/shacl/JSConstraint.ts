import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
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

  static readonly __mixins: Mixin[] = [JSConstraintMixin, JSExecutableMixin];
}
JSConstraintMixin.appliesTo = sh.JSConstraint
JSConstraintMixin.Class = JSConstraintImpl
