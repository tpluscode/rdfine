import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DefenceEstablishment)
  }
}
DefenceEstablishmentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DefenceEstablishment)
DefenceEstablishmentMixin.Class = DefenceEstablishmentImpl
