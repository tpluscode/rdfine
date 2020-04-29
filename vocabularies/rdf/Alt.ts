import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdf } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Rdf from '.';

export interface Alt extends RdfResource {
}

export function AltMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class AltClass extends Resource implements Alt {
  }
  return AltClass
}

class AltImpl extends AltMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Alt>) {
    super(arg, init)
    this.types.add(rdf.Alt)
  }
}
AltMixin.shouldApply = (r: RdfResource) => r.types.has(rdf.Alt)
AltMixin.Class = AltImpl
