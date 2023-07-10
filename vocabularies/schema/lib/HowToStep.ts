import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';
import { ItemListMixin } from './ItemList.js';
import { ListItemMixin } from './ListItem.js';

export interface HowToStep<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.ItemList<D>, Schema.ListItem<D>, rdfine.RdfResource<D> {
}

export function HowToStepMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<HowToStep & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HowToStepClass extends ListItemMixin(ItemListMixin(CreativeWorkMixin(Resource))) {
  }
  return HowToStepClass as any
}

class HowToStepImpl extends HowToStepMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToStep>) {
    super(arg, init)
    this.types.add(schema.HowToStep)
  }

  static readonly __mixins: Mixin[] = [HowToStepMixin, CreativeWorkMixin, ItemListMixin, ListItemMixin];
}
HowToStepMixin.appliesTo = schema.HowToStep
HowToStepMixin.Class = HowToStepImpl

export const fromPointer = createFactory<HowToStep>([ListItemMixin, ItemListMixin, CreativeWorkMixin, HowToStepMixin], { types: [schema.HowToStep] });
