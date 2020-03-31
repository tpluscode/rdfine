import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Cell>) {
    super(arg, init)
    this.types.add(csvw.Cell)
  }
}
CellMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Cell)
CellMixin.Class = CellImpl
