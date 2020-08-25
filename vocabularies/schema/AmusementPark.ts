import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface AmusementPark extends Schema.EntertainmentBusiness, RdfResource {
}

export function AmusementParkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AmusementParkClass extends EntertainmentBusinessMixin(Resource) implements AmusementPark {
  }
  return AmusementParkClass
}

class AmusementParkImpl extends AmusementParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AmusementPark>) {
    super(arg, init)
    this.types.add(schema.AmusementPark)
  }

  static readonly __mixins: Mixin[] = [AmusementParkMixin, EntertainmentBusinessMixin];
}
AmusementParkMixin.appliesTo = schema.AmusementPark
AmusementParkMixin.Class = AmusementParkImpl
