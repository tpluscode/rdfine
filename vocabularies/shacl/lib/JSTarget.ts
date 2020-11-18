import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { JSExecutableMixin } from './JSExecutable';
import { TargetMixin } from './Target';

export interface JSTarget<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, Sh.Target<D>, RdfResource<D> {
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

  static readonly __mixins: Mixin[] = [JSTargetMixin, JSExecutableMixin, TargetMixin];
}
JSTargetMixin.appliesTo = sh.JSTarget
JSTargetMixin.Class = JSTargetImpl
