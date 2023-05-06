import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';
import { ListItemMixin } from './ListItem.js';

export interface HowToTip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.ListItem<D>, RdfResource<D> {
}

export function HowToTipMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HowToTip> & RdfResourceCore> & Base {
  @namespace(schema)
  class HowToTipClass extends ListItemMixin(CreativeWorkMixin(Resource)) implements Partial<HowToTip> {
  }
  return HowToTipClass
}

class HowToTipImpl extends HowToTipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToTip>) {
    super(arg, init)
    this.types.add(schema.HowToTip)
  }

  static readonly __mixins: Mixin[] = [HowToTipMixin, CreativeWorkMixin, ListItemMixin];
}
HowToTipMixin.appliesTo = schema.HowToTip
HowToTipMixin.Class = HowToTipImpl

export const fromPointer = createFactory<HowToTip>([ListItemMixin, CreativeWorkMixin, HowToTipMixin], { types: [schema.HowToTip] });
