import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';
import { ParameterizableMixin } from './Parameterizable';

export interface TargetType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, Sh.Parameterizable<D>, RdfResource<D> {
}

export function TargetTypeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class TargetTypeClass extends ParameterizableMixin(Rdfs.ClassMixin(Resource)) implements TargetType {
  }
  return TargetTypeClass
}

class TargetTypeImpl extends TargetTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TargetType>) {
    super(arg, init)
    this.types.add(sh.TargetType)
  }

  static readonly __mixins: Mixin[] = [TargetTypeMixin, Rdfs.ClassMixin, ParameterizableMixin];
}
TargetTypeMixin.appliesTo = sh.TargetType
TargetTypeMixin.Class = TargetTypeImpl
