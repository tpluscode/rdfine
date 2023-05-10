import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PerformingGroupMixin } from './PerformingGroup.js';

export interface DanceGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PerformingGroup<D>, rdfine.RdfResource<D> {
}

export function DanceGroupMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DanceGroup> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DanceGroupClass extends PerformingGroupMixin(Resource) implements Partial<DanceGroup> {
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

export const fromPointer = createFactory<DanceGroup>([PerformingGroupMixin, DanceGroupMixin], { types: [schema.DanceGroup] });
