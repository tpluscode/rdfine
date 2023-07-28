import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { GeoShapeMixin } from './GeoShape.js';

export interface GeoCircle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GeoShape<D>, rdfine.RdfResource<D> {
  geoMidpoint: Schema.GeoCoordinates<D> | undefined;
  geoRadius: Schema.Distance<D> | undefined;
  geoRadiusLiteral: number | string | undefined;
}

export function GeoCircleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GeoCircle & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GeoCircleClass extends GeoShapeMixin(Resource) {
    @rdfine.property.resource()
    geoMidpoint: Schema.GeoCoordinates | undefined;
    @rdfine.property.resource()
    geoRadius: Schema.Distance | undefined;
    @rdfine.property.literal({ path: schema.geoRadius })
    geoRadiusLiteral: number | string | undefined;
  }
  return GeoCircleClass as any
}

class GeoCircleImpl extends GeoCircleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GeoCircle>) {
    super(arg, init)
    this.types.add(schema.GeoCircle)
  }

  static readonly __mixins: Mixin[] = [GeoCircleMixin, GeoShapeMixin];
}
GeoCircleMixin.appliesTo = schema.GeoCircle
GeoCircleMixin.Class = GeoCircleImpl

export const fromPointer = createFactory<GeoCircle>([GeoShapeMixin, GeoCircleMixin], { types: [schema.GeoCircle] });
