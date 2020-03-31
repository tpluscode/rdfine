import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Series>) {
    super(arg, init)
    this.types.add(schema.Series)
  }
}
SeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Series)
SeriesMixin.Class = SeriesImpl
