import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<PerformingArtsTheater>) {
    super(arg, init)
    this.types.add(schema.PerformingArtsTheater)
  }
}
PerformingArtsTheaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformingArtsTheater)
PerformingArtsTheaterMixin.Class = PerformingArtsTheaterImpl
