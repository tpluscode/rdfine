import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness';

export interface TattooParlor extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export function TattooParlorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TattooParlorClass extends HealthAndBeautyBusinessMixin(Resource) implements TattooParlor {
  }
  return TattooParlorClass
}

class TattooParlorImpl extends TattooParlorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TattooParlor>) {
    super(arg, init)
    this.types.add(schema.TattooParlor)
  }

  static readonly __mixins: Mixin[] = [TattooParlorMixin, HealthAndBeautyBusinessMixin];
}
TattooParlorMixin.appliesTo = schema.TattooParlor
TattooParlorMixin.Class = TattooParlorImpl
