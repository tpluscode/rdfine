import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HealthAndBeautyBusiness)
  }
}
HealthAndBeautyBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HealthAndBeautyBusiness)
HealthAndBeautyBusinessMixin.Class = HealthAndBeautyBusinessImpl
