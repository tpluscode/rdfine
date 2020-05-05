import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '.';

export interface Direction extends RdfResource {
}

export function DirectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class DirectionClass extends Resource implements Direction {
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
