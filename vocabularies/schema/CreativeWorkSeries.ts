import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import SeriesMixin from './Series';

export interface CreativeWorkSeries extends Schema.CreativeWork, Schema.Series, RdfResource {
  endDate: Date;
  issn: string;
  startDate: Date;
}

export default function CreativeWorkSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkSeriesClass extends SeriesMixin(CreativeWorkMixin(Resource)) implements CreativeWorkSeries {
    @property.literal()
    endDate!: Date;
    @property.literal()
    issn!: string;
    @property.literal()
    startDate!: Date;
  }
  return CreativeWorkSeriesClass
}

class CreativeWorkSeriesImpl extends CreativeWorkSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreativeWorkSeries>) {
    super(arg, init)
    this.types.add(schema.CreativeWorkSeries)
  }
}
CreativeWorkSeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CreativeWorkSeries)
CreativeWorkSeriesMixin.Class = CreativeWorkSeriesImpl
