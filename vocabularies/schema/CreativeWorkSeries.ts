import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import SeriesMixin from './Series';

export interface CreativeWorkSeries extends Schema.CreativeWork, Schema.Series, RdfResource {
  endDate: Date | Date;
  issn: string;
  startDate: Date | Date;
}

export default function CreativeWorkSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkSeriesClass extends SeriesMixin(CreativeWorkMixin(Resource)) implements CreativeWorkSeries {
    @property.literal()
    endDate!: Date | Date;
    @property.literal()
    issn!: string;
    @property.literal()
    startDate!: Date | Date;
  }
  return CreativeWorkSeriesClass
}

class CreativeWorkSeriesImpl extends CreativeWorkSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CreativeWorkSeries>) {
    super(arg)
    this.types.add(schema.CreativeWorkSeries)
    initializeProperties<CreativeWorkSeries>(this, init)
  }
}
CreativeWorkSeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CreativeWorkSeries)
CreativeWorkSeriesMixin.Class = CreativeWorkSeriesImpl
