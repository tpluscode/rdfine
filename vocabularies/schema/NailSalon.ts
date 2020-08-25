import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness';

export interface NailSalon extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export function NailSalonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NailSalonClass extends HealthAndBeautyBusinessMixin(Resource) implements NailSalon {
  }
  return NailSalonClass
}

class NailSalonImpl extends NailSalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NailSalon>) {
    super(arg, init)
    this.types.add(schema.NailSalon)
  }

  static readonly __mixins: Mixin[] = [NailSalonMixin, HealthAndBeautyBusinessMixin];
}
NailSalonMixin.appliesTo = schema.NailSalon
NailSalonMixin.Class = NailSalonImpl
