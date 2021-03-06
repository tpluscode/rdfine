import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { IgnoreMixin } from './Ignore';

export interface Block<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Ignore<D>, RdfResource<D> {
}

export function BlockMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Block> & RdfResourceCore> & Base {
  @namespace(as)
  class BlockClass extends IgnoreMixin(Resource) implements Partial<Block> {
  }
  return BlockClass
}

class BlockImpl extends BlockMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Block>) {
    super(arg, init)
    this.types.add(as.Block)
  }

  static readonly __mixins: Mixin[] = [BlockMixin, IgnoreMixin];
}
BlockMixin.appliesTo = as.Block
BlockMixin.Class = BlockImpl

export const fromPointer = createFactory<Block>([IgnoreMixin, BlockMixin], { types: [as.Block] });
