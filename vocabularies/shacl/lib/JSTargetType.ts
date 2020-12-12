import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { JSExecutableMixin } from './JSExecutable';
import { TargetTypeMixin } from './TargetType';

export interface JSTargetType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.JSExecutable<D>, Sh.TargetType<D>, RdfResource<D> {
}

export function JSTargetTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JSTargetType> & RdfResourceCore> & Base {
  @namespace(sh)
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
