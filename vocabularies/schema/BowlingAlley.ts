import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BowlingAlley>) {
    super(arg, init)
    this.types.add(schema.BowlingAlley)
  }
}
BowlingAlleyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BowlingAlley)
BowlingAlleyMixin.Class = BowlingAlleyImpl
