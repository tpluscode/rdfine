import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LandformMixin } from './Landform';

export interface Volcano extends Schema.Landform, RdfResource {
}

export function VolcanoMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VolcanoClass extends LandformMixin(Resource) implements Volcano {
  }
  return VolcanoClass
}

class VolcanoImpl extends VolcanoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Volcano>) {
    super(arg, init)
    this.types.add(schema.Volcano)
  }

  static readonly __mixins: Mixin[] = [VolcanoMixin, LandformMixin];
}
VolcanoMixin.appliesTo = schema.Volcano
VolcanoMixin.Class = VolcanoImpl
