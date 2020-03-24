import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Series extends Schema.Intangible, RdfResource {
}

export default function SeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SeriesClass extends IntangibleMixin(Resource) implements Series {
  }
  return SeriesClass
}

class SeriesImpl extends SeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Series>) {
    super(arg)
    this.types.add(schema.Series)
    initializeProperties(this, init)
  }
}
SeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Series)
SeriesMixin.Class = SeriesImpl
