import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LandformMixin } from './Landform';

export interface Mountain<ID extends ResourceNode = ResourceNode> extends Schema.Landform<ID>, RdfResource<ID> {
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
