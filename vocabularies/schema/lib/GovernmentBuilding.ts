import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface GovernmentBuilding<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function GovernmentBuildingMixin<Base extends Constructor>(Resource: Base): Constructor<GovernmentBuilding> & Base {
  @namespace(schema)
  class GovernmentBuildingClass extends CivicStructureMixin(Resource) implements Partial<GovernmentBuilding> {
  }
  return GovernmentBuildingClass
}

class GovernmentBuildingImpl extends GovernmentBuildingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GovernmentBuilding>) {
    super(arg, init)
    this.types.add(schema.GovernmentBuilding)
  }

  static readonly __mixins: Mixin[] = [GovernmentBuildingMixin, CivicStructureMixin];
}
GovernmentBuildingMixin.appliesTo = schema.GovernmentBuilding
GovernmentBuildingMixin.Class = GovernmentBuildingImpl
