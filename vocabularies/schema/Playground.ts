import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Playground extends Schema.CivicStructure, RdfResource {
}

export default function PlaygroundMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlaygroundClass extends CivicStructureMixin(Resource) implements Playground {
  }
  return PlaygroundClass
}

class PlaygroundImpl extends PlaygroundMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Playground)
  }
}
PlaygroundMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Playground)
PlaygroundMixin.Class = PlaygroundImpl
