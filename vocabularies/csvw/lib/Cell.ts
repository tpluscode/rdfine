import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface Cell<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function CellMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Cell> & RdfResourceCore> & Base {
  @namespace(csvw)
  class CellClass extends Resource implements Partial<Cell> {
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

export const fromPointer = createFactory<Cell>([CellMixin], { types: [csvw.Cell] });
