import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PerformingGroupMixin } from './PerformingGroup';

export interface DanceGroup extends Schema.PerformingGroup, RdfResource {
}

export function DanceGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DanceGroupClass extends PerformingGroupMixin(Resource) implements DanceGroup {
  }
  return DanceGroupClass
}

class DanceGroupImpl extends DanceGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DanceGroup>) {
    super(arg, init)
    this.types.add(schema.DanceGroup)
  }

  static readonly __mixins: Mixin[] = [DanceGroupMixin, PerformingGroupMixin];
}
DanceGroupMixin.appliesTo = schema.DanceGroup
DanceGroupMixin.Class = DanceGroupImpl
