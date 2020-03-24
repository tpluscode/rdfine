import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<GeoCircle>) {
    super(arg)
    this.types.add(schema.GeoCircle)
    initializeProperties(this, init)
  }
}
GeoCircleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GeoCircle)
GeoCircleMixin.Class = GeoCircleImpl
