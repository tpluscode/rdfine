import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<HealthAndBeautyBusiness>) {
    super(arg, init)
    this.types.add(schema.HealthAndBeautyBusiness)
  }
}
HealthAndBeautyBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HealthAndBeautyBusiness)
HealthAndBeautyBusinessMixin.Class = HealthAndBeautyBusinessImpl
