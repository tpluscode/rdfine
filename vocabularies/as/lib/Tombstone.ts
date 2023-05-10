import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Tombstone<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
  deleted: Date | undefined;
  formerType: As.Object<D> | undefined;
}

export function TombstoneMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Tombstone> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class TombstoneClass extends ObjectMixin(Resource) implements Partial<Tombstone> {
    @rdfine.property.literal({ type: Date })
    deleted: Date | undefined;
    @rdfine.property.resource({ implicitTypes: [as.Object] })
    formerType: As.Object | undefined;
  }
  return TombstoneClass
}

class TombstoneImpl extends TombstoneMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Tombstone>) {
    super(arg, init)
    this.types.add(as.Tombstone)
  }

  static readonly __mixins: Mixin[] = [TombstoneMixin, ObjectMixin];
}
TombstoneMixin.appliesTo = as.Tombstone
TombstoneMixin.Class = TombstoneImpl

export const fromPointer = createFactory<Tombstone>([ObjectMixin, TombstoneMixin], { types: [as.Tombstone] });
