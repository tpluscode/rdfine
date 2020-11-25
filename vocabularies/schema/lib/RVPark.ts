import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface RVPark<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, RdfResource<ID> {
}

export function RVParkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RVParkClass extends CivicStructureMixin(Resource) implements RVPark {
  }
  return RVParkClass
}

class RVParkImpl extends RVParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RVPark>) {
    super(arg, init)
    this.types.add(schema.RVPark)
  }

  static readonly __mixins: Mixin[] = [RVParkMixin, CivicStructureMixin];
}
RVParkMixin.appliesTo = schema.RVPark
RVParkMixin.Class = RVParkImpl
