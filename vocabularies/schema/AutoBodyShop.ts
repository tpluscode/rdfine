import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface AutoBodyShop extends Schema.AutomotiveBusiness, RdfResource {
}

export default function AutoBodyShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutoBodyShopClass extends AutomotiveBusinessMixin(Resource) implements AutoBodyShop {
  }
  return AutoBodyShopClass
}

class AutoBodyShopImpl extends AutoBodyShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoBodyShop>) {
    super(arg, init)
    this.types.add(schema.AutoBodyShop)
  }
}
AutoBodyShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoBodyShop)
AutoBodyShopMixin.Class = AutoBodyShopImpl
