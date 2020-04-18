import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import PlaceMixin from './Place';

export interface CivicStructure extends Schema.Place, RdfResource {
  openingHours: string;
}

export default function CivicStructureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CivicStructureClass extends PlaceMixin(Resource) implements CivicStructure {
    @property.literal()
    openingHours!: string;
  }
  return CivicStructureClass
}

class CivicStructureImpl extends CivicStructureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CivicStructure>) {
    super(arg, init)
    this.types.add(schema.CivicStructure)
  }
}
CivicStructureMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CivicStructure)
CivicStructureMixin.Class = CivicStructureImpl
