import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { csvw } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '..';

export interface Cell<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
}

export function CellMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [CellMixin];
}
CellMixin.appliesTo = csvw.Cell
CellMixin.Class = CellImpl
