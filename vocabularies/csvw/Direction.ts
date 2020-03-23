import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(csvw.Direction)
  }
}
DirectionMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Direction)
DirectionMixin.Class = DirectionImpl
