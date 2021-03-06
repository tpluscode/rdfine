import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface AutoBodyShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, RdfResource<D> {
}

export function AutoBodyShopMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AutoBodyShop> & RdfResourceCore> & Base {
  @namespace(schema)
  class AutoBodyShopClass extends AutomotiveBusinessMixin(Resource) implements Partial<AutoBodyShop> {
  }
  return AutoBodyShopClass
}

class AutoBodyShopImpl extends AutoBodyShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoBodyShop>) {
    super(arg, init)
    this.types.add(schema.AutoBodyShop)
  }

  static readonly __mixins: Mixin[] = [AutoBodyShopMixin, AutomotiveBusinessMixin];
}
AutoBodyShopMixin.appliesTo = schema.AutoBodyShop
AutoBodyShopMixin.Class = AutoBodyShopImpl

export const fromPointer = createFactory<AutoBodyShop>([AutomotiveBusinessMixin, AutoBodyShopMixin], { types: [schema.AutoBodyShop] });
