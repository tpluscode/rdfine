import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HowToItemMixin } from './HowToItem';

export interface HowToTool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HowToItem<D>, RdfResource<D> {
}

export function HowToToolMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HowToTool> & RdfResourceCore> & Base {
  @namespace(schema)
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
