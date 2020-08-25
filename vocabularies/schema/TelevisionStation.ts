import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface TelevisionStation extends Schema.LocalBusiness, RdfResource {
}

export function TelevisionStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TelevisionStationClass extends LocalBusinessMixin(Resource) implements TelevisionStation {
  }
  return TelevisionStationClass
}

class TelevisionStationImpl extends TelevisionStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TelevisionStation>) {
    super(arg, init)
    this.types.add(schema.TelevisionStation)
  }

  static readonly __mixins: Mixin[] = [TelevisionStationMixin, LocalBusinessMixin];
}
TelevisionStationMixin.appliesTo = schema.TelevisionStation
TelevisionStationMixin.Class = TelevisionStationImpl
