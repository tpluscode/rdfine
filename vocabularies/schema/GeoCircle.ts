import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import GeoShapeMixin from './GeoShape';

export interface GeoCircle extends Schema.GeoShape, RdfResource {
  geoMidpoint: Schema.GeoCoordinates;
  geoRadius: Schema.Distance;
  geoRadiusLiteral: number | string;
}

export default function GeoCircleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GeoCircleClass extends GeoShapeMixin(Resource) implements GeoCircle {
    @property.resource()
    geoMidpoint!: Schema.GeoCoordinates;
    @property.resource()
    geoRadius!: Schema.Distance;
    @property.literal({ path: schema.geoRadius })
    geoRadiusLiteral!: number | string;
  }
  return GeoCircleClass
}

class GeoCircleImpl extends GeoCircleMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GeoCircle)
  }
}
GeoCircleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GeoCircle)
GeoCircleMixin.Class = GeoCircleImpl
