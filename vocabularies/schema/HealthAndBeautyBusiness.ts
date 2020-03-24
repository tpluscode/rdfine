import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface HealthAndBeautyBusiness extends Schema.LocalBusiness, RdfResource {
}

export default function HealthAndBeautyBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HealthAndBeautyBusinessClass extends LocalBusinessMixin(Resource) implements HealthAndBeautyBusiness {
  }
  return HealthAndBeautyBusinessClass
}

class HealthAndBeautyBusinessImpl extends HealthAndBeautyBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HealthAndBeautyBusiness>) {
    super(arg)
    this.types.add(schema.HealthAndBeautyBusiness)
    initializeProperties(this, init)
  }
}
HealthAndBeautyBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HealthAndBeautyBusiness)
HealthAndBeautyBusinessMixin.Class = HealthAndBeautyBusinessImpl
