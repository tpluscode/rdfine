import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { JSExecutableMixin } from './JSExecutable.js';
import { TargetMixin } from './Target.js';

export interface JSTarget<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, Sh.Target<D>, rdfine.RdfResource<D> {
}

export function JSTargetMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<JSTarget> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class JSTargetClass extends TargetMixin(JSExecutableMixin(Resource)) implements Partial<JSTarget> {
  }
  return JSTargetClass
}

class JSTargetImpl extends JSTargetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSTarget>) {
    super(arg, init)
    this.types.add(sh.JSTarget)
  }

  static readonly __mixins: Mixin[] = [JSTargetMixin, JSExecutableMixin, TargetMixin];
}
JSTargetMixin.appliesTo = sh.JSTarget
JSTargetMixin.Class = JSTargetImpl

export const fromPointer = createFactory<JSTarget>([TargetMixin, JSExecutableMixin, JSTargetMixin], { types: [sh.JSTarget] });
