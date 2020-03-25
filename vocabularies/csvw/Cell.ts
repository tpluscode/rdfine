import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Csvw from '.';

export interface Cell extends RdfResource {
}

export default function CellMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class CellClass extends Resource implements Cell {
  }
  return CellClass
}

class CellImpl extends CellMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Cell>) {
    super(arg)
    this.types.add(csvw.Cell)
    initializeProperties<Cell>(this, init)
  }
}
CellMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Cell)
CellMixin.Class = CellImpl
