import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Csvw from '.';

export interface Direction extends RdfResource {
}

export default function DirectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class DirectionClass extends Resource implements Direction {
  }
  return DirectionClass
}

class DirectionImpl extends DirectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Direction>) {
    super(arg)
    this.types.add(csvw.Direction)
    initializeProperties<Direction>(this, init)
  }
}
DirectionMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Direction)
DirectionMixin.Class = DirectionImpl
