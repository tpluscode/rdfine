import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface Direction<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function DirectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Direction> & RdfResourceCore> & Base {
  @rdfine.namespace(csvw)
  class DirectionClass extends Resource implements Partial<Direction> {
  }
  return DirectionClass
}

class DirectionImpl extends DirectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Direction>) {
    super(arg, init)
    this.types.add(csvw.Direction)
  }

  static readonly __mixins: Mixin[] = [DirectionMixin];
}
DirectionMixin.appliesTo = csvw.Direction
DirectionMixin.Class = DirectionImpl

export const fromPointer = createFactory<Direction>([DirectionMixin], { types: [csvw.Direction] });
