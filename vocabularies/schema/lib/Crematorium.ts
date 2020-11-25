import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Crematorium<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, RdfResource<ID> {
}

export function CrematoriumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CrematoriumClass extends CivicStructureMixin(Resource) implements Crematorium {
  }
  return CrematoriumClass
}

class CrematoriumImpl extends CrematoriumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Crematorium>) {
    super(arg, init)
    this.types.add(schema.Crematorium)
  }

  static readonly __mixins: Mixin[] = [CrematoriumMixin, CivicStructureMixin];
}
CrematoriumMixin.appliesTo = schema.Crematorium
CrematoriumMixin.Class = CrematoriumImpl
