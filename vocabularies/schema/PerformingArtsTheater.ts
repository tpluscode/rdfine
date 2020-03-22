import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PerformingArtsTheater)
  }
}
PerformingArtsTheaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformingArtsTheater)
PerformingArtsTheaterMixin.Class = PerformingArtsTheaterImpl
