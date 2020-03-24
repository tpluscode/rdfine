import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import GovernmentBuildingMixin from './GovernmentBuilding';

export interface DefenceEstablishment extends Schema.GovernmentBuilding, RdfResource {
}

export default function DefenceEstablishmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DefenceEstablishmentClass extends GovernmentBuildingMixin(Resource) implements DefenceEstablishment {
  }
  return DefenceEstablishmentClass
}

class DefenceEstablishmentImpl extends DefenceEstablishmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DefenceEstablishment>) {
    super(arg)
    this.types.add(schema.DefenceEstablishment)
    initializeProperties(this, init)
  }
}
DefenceEstablishmentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DefenceEstablishment)
DefenceEstablishmentMixin.Class = DefenceEstablishmentImpl
