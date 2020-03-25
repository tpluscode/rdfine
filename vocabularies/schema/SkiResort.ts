import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface SkiResort extends Schema.SportsActivityLocation, RdfResource {
}

export default function SkiResortMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SkiResortClass extends SportsActivityLocationMixin(Resource) implements SkiResort {
  }
  return SkiResortClass
}

class SkiResortImpl extends SkiResortMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SkiResort>) {
    super(arg, init)
    this.types.add(schema.SkiResort)
  }
}
SkiResortMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SkiResort)
SkiResortMixin.Class = SkiResortImpl
