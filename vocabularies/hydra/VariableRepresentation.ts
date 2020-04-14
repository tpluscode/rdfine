import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import ResourceMixin from './Resource';

export interface VariableRepresentation extends Hydra.Resource, RdfResource {
}

export default function VariableRepresentationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class VariableRepresentationClass extends ResourceMixin(Resource) implements VariableRepresentation {
  }
  return VariableRepresentationClass
}

class VariableRepresentationImpl extends VariableRepresentationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VariableRepresentation>) {
    super(arg, init)
    this.types.add(hydra.VariableRepresentation)
  }
}
VariableRepresentationMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.VariableRepresentation)
VariableRepresentationMixin.Class = VariableRepresentationImpl
