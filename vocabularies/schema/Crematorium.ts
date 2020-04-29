import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface Crematorium extends Schema.CivicStructure, RdfResource {
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
}
CrematoriumMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Crematorium)
CrematoriumMixin.Class = CrematoriumImpl
