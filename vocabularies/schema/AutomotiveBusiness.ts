import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface AutomotiveBusiness extends Schema.LocalBusiness, RdfResource {
}

export function AutomotiveBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutomotiveBusinessClass extends LocalBusinessMixin(Resource) implements AutomotiveBusiness {
  }
  return AutomotiveBusinessClass
}

class AutomotiveBusinessImpl extends AutomotiveBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutomotiveBusiness>) {
    super(arg, init)
    this.types.add(schema.AutomotiveBusiness)
  }

  static readonly __mixins: Mixin[] = [AutomotiveBusinessMixin, LocalBusinessMixin];
}
AutomotiveBusinessMixin.appliesTo = schema.AutomotiveBusiness
AutomotiveBusinessMixin.Class = AutomotiveBusinessImpl
