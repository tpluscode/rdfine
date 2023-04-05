import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface Winery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function WineryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Winery> & RdfResourceCore> & Base {
  @namespace(schema)
  class WineryClass extends FoodEstablishmentMixin(Resource) implements Partial<Winery> {
  }
  return WineryClass
}

class WineryImpl extends WineryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Winery>) {
    super(arg, init)
    this.types.add(schema.Winery)
  }

  static readonly __mixins: Mixin[] = [WineryMixin, FoodEstablishmentMixin];
}
WineryMixin.appliesTo = schema.Winery
WineryMixin.Class = WineryImpl

export const fromPointer = createFactory<Winery>([FoodEstablishmentMixin, WineryMixin], { types: [schema.Winery] });
