import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GeoShapeMixin } from './GeoShape';

export interface GeoCircle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GeoShape<D>, RdfResource<D> {
  geoMidpoint: Schema.GeoCoordinates<D> | undefined;
  geoRadius: Schema.Distance<D> | undefined;
  geoRadiusLiteral: number | string | undefined;
}

export function GeoCircleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GeoCircle> & RdfResourceCore> & Base {
  @namespace(schema)
  class GeoCircleClass extends GeoShapeMixin(Resource) implements Partial<GeoCircle> {
    @property.resource()
    geoMidpoint: Schema.GeoCoordinates | undefined;
    @property.resource()
    geoRadius: Schema.Distance | undefined;
    @property.literal({ path: schema.geoRadius })
    geoRadiusLiteral: number | string | undefined;
  }
  return GeoCircleClass
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
