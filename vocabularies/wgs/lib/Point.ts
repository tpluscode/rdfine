import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { wgs } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Wgs from '../index.js';
import { SpatialThingMixin } from './SpatialThing.js';

export interface Point<D extends RDF.DatasetCore = RDF.DatasetCore> extends Wgs.SpatialThing<D>, rdfine.RdfResource<D> {
}

export function PointMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Point & RdfResourceCore> & Base {
  @rdfine.namespace(wgs)
  class PointClass extends SpatialThingMixin(Resource) {
  }
  return PointClass as any
}

class PointImpl extends PointMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Point>) {
    super(arg, init)
    this.types.add(wgs.Point)
  }

  static readonly __mixins: Mixin[] = [PointMixin, SpatialThingMixin];
}
PointMixin.appliesTo = wgs.Point
PointMixin.Class = PointImpl

export const fromPointer = createFactory<Point>([SpatialThingMixin, PointMixin], { types: [wgs.Point] });
