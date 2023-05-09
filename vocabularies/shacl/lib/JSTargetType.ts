import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { JSExecutableMixin } from './JSExecutable.js';
import { TargetTypeMixin } from './TargetType.js';

export interface JSTargetType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, Sh.TargetType<D>, rdfine.RdfResource<D> {
}

export function JSTargetTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<JSTargetType> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class JSTargetTypeClass extends TargetTypeMixin(JSExecutableMixin(Resource)) implements Partial<JSTargetType> {
  }
  return JSTargetTypeClass
}

class JSTargetTypeImpl extends JSTargetTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSTargetType>) {
    super(arg, init)
    this.types.add(sh.JSTargetType)
  }

  static readonly __mixins: Mixin[] = [JSTargetTypeMixin, JSExecutableMixin, TargetTypeMixin];
}
JSTargetTypeMixin.appliesTo = sh.JSTargetType
JSTargetTypeMixin.Class = JSTargetTypeImpl

export const fromPointer = createFactory<JSTargetType>([TargetTypeMixin, JSExecutableMixin, JSTargetTypeMixin], { types: [sh.JSTargetType] });
