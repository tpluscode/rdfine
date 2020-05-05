import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness';

export interface HairSalon extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export function HairSalonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HairSalonClass extends HealthAndBeautyBusinessMixin(Resource) implements HairSalon {
  }
  return HairSalonClass
}

class HairSalonImpl extends HairSalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HairSalon>) {
    super(arg, init)
    this.types.add(schema.HairSalon)
  }

  static readonly __mixins: Mixin[] = [HairSalonMixin, HealthAndBeautyBusinessMixin];
}
HairSalonMixin.appliesTo = schema.HairSalon
HairSalonMixin.Class = HairSalonImpl
