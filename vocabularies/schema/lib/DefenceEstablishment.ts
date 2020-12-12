import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GovernmentBuildingMixin } from './GovernmentBuilding';

export interface DefenceEstablishment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentBuilding<D>, RdfResource<D> {
}

export function DefenceEstablishmentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DefenceEstablishment> & RdfResourceCore> & Base {
  @namespace(schema)
  class DefenceEstablishmentClass extends GovernmentBuildingMixin(Resource) implements Partial<DefenceEstablishment> {
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
