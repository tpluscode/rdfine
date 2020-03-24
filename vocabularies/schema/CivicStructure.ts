import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CivicStructure)
  }
}
CivicStructureMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CivicStructure)
CivicStructureMixin.Class = CivicStructureImpl
