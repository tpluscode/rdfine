import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { GovernmentBuildingMixin } from './GovernmentBuilding';

export interface DefenceEstablishment extends Schema.GovernmentBuilding, RdfResource {
}

export function DefenceEstablishmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DefenceEstablishmentClass extends GovernmentBuildingMixin(Resource) implements DefenceEstablishment {
  }
  return DefenceEstablishmentClass
}

class DefenceEstablishmentImpl extends DefenceEstablishmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DefenceEstablishment>) {
    super(arg, init)
    this.types.add(schema.DefenceEstablishment)
  }

  static readonly __mixins: Mixin[] = [DefenceEstablishmentMixin, GovernmentBuildingMixin];
}
DefenceEstablishmentMixin.appliesTo = schema.DefenceEstablishment
DefenceEstablishmentMixin.Class = DefenceEstablishmentImpl
