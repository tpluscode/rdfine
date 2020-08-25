import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface PublicSwimmingPool extends Schema.SportsActivityLocation, RdfResource {
}

export function PublicSwimmingPoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PublicSwimmingPoolClass extends SportsActivityLocationMixin(Resource) implements PublicSwimmingPool {
  }
  return PublicSwimmingPoolClass
}

class PublicSwimmingPoolImpl extends PublicSwimmingPoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PublicSwimmingPool>) {
    super(arg, init)
    this.types.add(schema.PublicSwimmingPool)
  }

  static readonly __mixins: Mixin[] = [PublicSwimmingPoolMixin, SportsActivityLocationMixin];
}
PublicSwimmingPoolMixin.appliesTo = schema.PublicSwimmingPool
PublicSwimmingPoolMixin.Class = PublicSwimmingPoolImpl
