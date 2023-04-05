import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { JSExecutableMixin } from './JSExecutable.js';
import { TargetMixin } from './Target.js';

export interface JSTarget<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, Sh.Target<D>, RdfResource<D> {
}

export function JSTargetMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JSTarget> & RdfResourceCore> & Base {
  @namespace(sh)
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
