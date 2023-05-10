import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HowToItemMixin } from './HowToItem.js';

export interface HowToTool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HowToItem<D>, rdfine.RdfResource<D> {
}

export function HowToToolMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HowToTool> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HowToToolClass extends HowToItemMixin(Resource) implements Partial<HowToTool> {
  }
  return HowToToolClass
}

class HowToToolImpl extends HowToToolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToTool>) {
    super(arg, init)
    this.types.add(schema.HowToTool)
  }

  static readonly __mixins: Mixin[] = [HowToToolMixin, HowToItemMixin];
}
HowToToolMixin.appliesTo = schema.HowToTool
HowToToolMixin.Class = HowToToolImpl

export const fromPointer = createFactory<HowToTool>([HowToItemMixin, HowToToolMixin], { types: [schema.HowToTool] });
