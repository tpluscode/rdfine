import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Cemetery<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, RdfResource<ID> {
}

export function CemeteryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CemeteryClass extends CivicStructureMixin(Resource) implements Cemetery {
  }
  return CemeteryClass
}

class CemeteryImpl extends CemeteryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Cemetery>) {
    super(arg, init)
    this.types.add(schema.Cemetery)
  }

  static readonly __mixins: Mixin[] = [CemeteryMixin, CivicStructureMixin];
}
CemeteryMixin.appliesTo = schema.Cemetery
CemeteryMixin.Class = CemeteryImpl
