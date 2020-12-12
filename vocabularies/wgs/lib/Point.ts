import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { wgs } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Wgs from '..';
import { SpatialThingMixin } from './SpatialThing';

export interface Point<D extends RDF.DatasetCore = RDF.DatasetCore> extends Wgs.SpatialThing<D>, RdfResource<D> {
}

export function PointMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Point> & RdfResourceCore> & Base {
  @namespace(wgs)
  class PointClass extends SpatialThingMixin(Resource) implements Partial<Point> {
  }
  return PointClass
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
