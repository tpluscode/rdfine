import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GovernmentBuildingMixin } from './GovernmentBuilding';

export interface Embassy<ID extends ResourceNode = ResourceNode> extends Schema.GovernmentBuilding<ID>, RdfResource<ID> {
}

export function EmbassyMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [EmbassyMixin, GovernmentBuildingMixin];
}
EmbassyMixin.appliesTo = schema.Embassy
EmbassyMixin.Class = EmbassyImpl
