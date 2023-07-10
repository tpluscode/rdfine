import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface Cell<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function CellMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Cell & RdfResourceCore> & Base {
  @rdfine.namespace(csvw)
  class CellClass extends Resource {
  }
  return CellClass as any
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

export const fromPointer = createFactory<Cell>([CellMixin], { types: [csvw.Cell] });
