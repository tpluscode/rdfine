import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface RecyclingCenter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function RecyclingCenterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecyclingCenter> & RdfResourceCore> & Base {
  @namespace(schema)
  class RecyclingCenterClass extends LocalBusinessMixin(Resource) implements Partial<RecyclingCenter> {
  }
  return RecyclingCenterClass
}

class RecyclingCenterImpl extends RecyclingCenterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecyclingCenter>) {
    super(arg, init)
    this.types.add(schema.RecyclingCenter)
  }

  static readonly __mixins: Mixin[] = [RecyclingCenterMixin, LocalBusinessMixin];
}
RecyclingCenterMixin.appliesTo = schema.RecyclingCenter
RecyclingCenterMixin.Class = RecyclingCenterImpl

export const fromPointer = createFactory<RecyclingCenter>([LocalBusinessMixin, RecyclingCenterMixin], { types: [schema.RecyclingCenter] });
