import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkSeriesMixin from './CreativeWorkSeries';

export interface Periodical extends Schema.CreativeWorkSeries, RdfResource {
}

export default function PeriodicalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PeriodicalClass extends CreativeWorkSeriesMixin(Resource) implements Periodical {
  }
  return PeriodicalClass
}

class PeriodicalImpl extends PeriodicalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Periodical>) {
    super(arg)
    this.types.add(schema.Periodical)
    initializeProperties(this, init)
  }
}
PeriodicalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Periodical)
PeriodicalMixin.Class = PeriodicalImpl
