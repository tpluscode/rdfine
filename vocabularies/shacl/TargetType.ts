import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/Class';
import { ParameterizableMixin } from './Parameterizable';

export interface TargetType extends Rdfs.Class, Sh.Parameterizable, RdfResource {
}

export function TargetTypeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class TargetTypeClass extends ParameterizableMixin(RdfsClassMixin(Resource)) implements TargetType {
  }
  return TargetTypeClass
}

class TargetTypeImpl extends TargetTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TargetType>) {
    super(arg, init)
    this.types.add(sh.TargetType)
  }
}
TargetTypeMixin.shouldApply = (r: RdfResource) => r.types.has(sh.TargetType)
TargetTypeMixin.Class = TargetTypeImpl
