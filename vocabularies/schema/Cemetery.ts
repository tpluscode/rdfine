import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface Cemetery extends Schema.CivicStructure, RdfResource {
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
