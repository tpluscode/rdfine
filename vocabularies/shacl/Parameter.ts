import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import PropertyShapeMixin from './PropertyShape';

export interface Parameter extends Sh.PropertyShape, RdfResource {
  optional: boolean;
}

export default function ParameterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ParameterClass extends PropertyShapeMixin(Resource) implements Parameter {
    @property.literal({ type: Boolean })
    optional!: boolean;
  }
  return ParameterClass
}

class ParameterImpl extends ParameterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Parameter>) {
    super(arg, init)
    this.types.add(sh.Parameter)
  }
}
ParameterMixin.shouldApply = (r: RdfResource) => r.types.has(sh.Parameter)
ParameterMixin.Class = ParameterImpl
