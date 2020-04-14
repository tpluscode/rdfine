import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Embassy>) {
    super(arg, init)
    this.types.add(schema.Embassy)
  }
}
EmbassyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Embassy)
EmbassyMixin.Class = EmbassyImpl
