import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface PerformingArtsTheater extends Schema.CivicStructure, RdfResource {
}

export default function PerformingArtsTheaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PerformingArtsTheaterClass extends CivicStructureMixin(Resource) implements PerformingArtsTheater {
  }
  return PerformingArtsTheaterClass
}

class PerformingArtsTheaterImpl extends PerformingArtsTheaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PerformingArtsTheater>) {
    super(arg)
    this.types.add(schema.PerformingArtsTheater)
    initializeProperties<PerformingArtsTheater>(this, init)
  }
}
PerformingArtsTheaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformingArtsTheater)
PerformingArtsTheaterMixin.Class = PerformingArtsTheaterImpl
