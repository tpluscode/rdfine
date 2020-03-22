import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Embassy)
  }
}
EmbassyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Embassy)
EmbassyMixin.Class = EmbassyImpl
