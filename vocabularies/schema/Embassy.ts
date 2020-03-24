import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import GovernmentBuildingMixin from './GovernmentBuilding';

export interface Embassy extends Schema.GovernmentBuilding, RdfResource {
}

export default function EmbassyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmbassyClass extends GovernmentBuildingMixin(Resource) implements Embassy {
  }
  return EmbassyClass
}

class EmbassyImpl extends EmbassyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Embassy>) {
    super(arg)
    this.types.add(schema.Embassy)
    initializeProperties(this, init)
  }
}
EmbassyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Embassy)
EmbassyMixin.Class = EmbassyImpl
