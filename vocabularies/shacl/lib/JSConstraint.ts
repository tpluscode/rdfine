import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { JSExecutableMixin } from './JSExecutable';

export interface JSConstraint<ID extends ResourceNode = ResourceNode> extends Sh.JSExecutable<ID>, RdfResource<ID> {
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
