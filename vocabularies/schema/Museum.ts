import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Museum extends Schema.CivicStructure, RdfResource {
}

export default function MuseumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MuseumClass extends CivicStructureMixin(Resource) implements Museum {
  }
  return MuseumClass
}

class MuseumImpl extends MuseumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Museum>) {
    super(arg, init)
    this.types.add(schema.Museum)
  }
}
MuseumMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Museum)
MuseumMixin.Class = MuseumImpl
