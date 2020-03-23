import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(csvw.Cell)
  }
}
CellMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Cell)
CellMixin.Class = CellImpl
