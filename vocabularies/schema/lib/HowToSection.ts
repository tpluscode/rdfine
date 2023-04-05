import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';
import { ItemListMixin } from './ItemList.js';
import { ListItemMixin } from './ListItem.js';

export interface HowToSection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.ItemList<D>, Schema.ListItem<D>, RdfResource<D> {
  steps: Array<Schema.CreativeWork<D> | Schema.ItemList<D>>;
  stepsLiteral: Array<string>;
}

export function HowToSectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HowToSection> & RdfResourceCore> & Base {
  @namespace(schema)
  class HowToSectionClass extends ListItemMixin(ItemListMixin(CreativeWorkMixin(Resource))) implements Partial<HowToSection> {
    @property.resource({ values: 'array' })
    steps!: Array<Schema.CreativeWork | Schema.ItemList>;
    @property.literal({ path: schema.steps, values: 'array' })
    stepsLiteral!: Array<string>;
  }
  return HowToSectionClass
}

class HowToSectionImpl extends HowToSectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToSection>) {
    super(arg, init)
    this.types.add(schema.HowToSection)
  }

  static readonly __mixins: Mixin[] = [HowToSectionMixin, CreativeWorkMixin, ItemListMixin, ListItemMixin];
}
HowToSectionMixin.appliesTo = schema.HowToSection
HowToSectionMixin.Class = HowToSectionImpl

export const fromPointer = createFactory<HowToSection>([ListItemMixin, ItemListMixin, CreativeWorkMixin, HowToSectionMixin], { types: [schema.HowToSection] });
