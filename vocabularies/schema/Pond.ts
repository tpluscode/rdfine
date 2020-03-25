import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface Pond extends Schema.BodyOfWater, RdfResource {
}

export default function PondMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PondClass extends BodyOfWaterMixin(Resource) implements Pond {
  }
  return PondClass
}

class PondImpl extends PondMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Pond>) {
    super(arg)
    this.types.add(schema.Pond)
    initializeProperties<Pond>(this, init)
  }
}
PondMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Pond)
PondMixin.Class = PondImpl
