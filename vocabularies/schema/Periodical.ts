import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Periodical>) {
    super(arg, init)
    this.types.add(schema.Periodical)
  }
}
PeriodicalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Periodical)
PeriodicalMixin.Class = PeriodicalImpl
