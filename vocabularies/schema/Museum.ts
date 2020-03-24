import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Museum>) {
    super(arg)
    this.types.add(schema.Museum)
    initializeProperties(this, init)
  }
}
MuseumMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Museum)
MuseumMixin.Class = MuseumImpl
