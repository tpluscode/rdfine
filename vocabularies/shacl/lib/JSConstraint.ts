import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { JSExecutableMixin } from './JSExecutable.js';

export interface JSConstraint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, rdfine.RdfResource<D> {
}

export function JSConstraintMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<JSConstraint & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class JSConstraintClass extends JSExecutableMixin(Resource) {
  }
  return JSConstraintClass as any
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

export const fromPointer = createFactory<JSConstraint>([JSExecutableMixin, JSConstraintMixin], { types: [sh.JSConstraint] });
