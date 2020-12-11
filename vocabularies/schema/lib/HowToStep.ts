import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';
import { ItemListMixin } from './ItemList';
import { ListItemMixin } from './ListItem';

export interface HowToStep<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.ItemList<D>, Schema.ListItem<D>, RdfResource<D> {
}

export function HowToStepMixin<Base extends Constructor>(Resource: Base): Constructor<HowToStep> & Base {
  @namespace(schema)
  class HowToStepClass extends ListItemMixin(ItemListMixin(CreativeWorkMixin(Resource))) implements Partial<HowToStep> {
  }
  return HowToStepClass
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
