import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { JSExecutableMixin } from './JSExecutable.js';

export interface JSConstraint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, RdfResource<D> {
}

export function JSConstraintMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JSConstraint> & RdfResourceCore> & Base {
  @namespace(sh)
  class JSConstraintClass extends JSExecutableMixin(Resource) implements Partial<JSConstraint> {
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

export const fromPointer = createFactory<JSConstraint>([JSExecutableMixin, JSConstraintMixin], { types: [sh.JSConstraint] });
