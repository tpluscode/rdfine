import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LandformMixin } from './Landform';

export interface Mountain extends Schema.Landform, RdfResource {
}

export function MountainMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MountainClass extends LandformMixin(Resource) implements Mountain {
  }
  return MountainClass
}

class MountainImpl extends MountainMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Mountain>) {
    super(arg, init)
    this.types.add(schema.Mountain)
  }

  static readonly __mixins: Mixin[] = [MountainMixin, LandformMixin];
}
MountainMixin.appliesTo = schema.Mountain
MountainMixin.Class = MountainImpl
