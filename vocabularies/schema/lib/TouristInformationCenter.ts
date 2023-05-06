import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface TouristInformationCenter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function TouristInformationCenterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TouristInformationCenter> & RdfResourceCore> & Base {
  @namespace(schema)
  class TouristInformationCenterClass extends LocalBusinessMixin(Resource) implements Partial<TouristInformationCenter> {
  }
  return TouristInformationCenterClass
}

class TouristInformationCenterImpl extends TouristInformationCenterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TouristInformationCenter>) {
    super(arg, init)
    this.types.add(schema.TouristInformationCenter)
  }

  static readonly __mixins: Mixin[] = [TouristInformationCenterMixin, LocalBusinessMixin];
}
TouristInformationCenterMixin.appliesTo = schema.TouristInformationCenter
TouristInformationCenterMixin.Class = TouristInformationCenterImpl

export const fromPointer = createFactory<TouristInformationCenter>([LocalBusinessMixin, TouristInformationCenterMixin], { types: [schema.TouristInformationCenter] });
