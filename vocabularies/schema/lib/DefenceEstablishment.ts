import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { GovernmentBuildingMixin } from './GovernmentBuilding.js';

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

export const fromPointer = createFactory<DefenceEstablishment>([GovernmentBuildingMixin, DefenceEstablishmentMixin], { types: [schema.DefenceEstablishment] });
