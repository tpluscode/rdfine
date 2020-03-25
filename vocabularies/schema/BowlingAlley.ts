import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface BowlingAlley extends Schema.SportsActivityLocation, RdfResource {
}

export default function BowlingAlleyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BowlingAlleyClass extends SportsActivityLocationMixin(Resource) implements BowlingAlley {
  }
  return BowlingAlleyClass
}

class BowlingAlleyImpl extends BowlingAlleyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BowlingAlley>) {
    super(arg)
    this.types.add(schema.BowlingAlley)
    initializeProperties<BowlingAlley>(this, init)
  }
}
BowlingAlleyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BowlingAlley)
BowlingAlleyMixin.Class = BowlingAlleyImpl
