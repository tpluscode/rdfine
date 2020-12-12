import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface InternetCafe<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function InternetCafeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InternetCafe> & RdfResourceCore> & Base {
  @namespace(schema)
  class InternetCafeClass extends LocalBusinessMixin(Resource) implements Partial<InternetCafe> {
  }
  return InternetCafeClass
}

class InternetCafeImpl extends InternetCafeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InternetCafe>) {
    super(arg, init)
    this.types.add(schema.InternetCafe)
  }

  static readonly __mixins: Mixin[] = [InternetCafeMixin, LocalBusinessMixin];
}
InternetCafeMixin.appliesTo = schema.InternetCafe
InternetCafeMixin.Class = InternetCafeImpl

export const fromPointer = createFactory<InternetCafe>([LocalBusinessMixin, InternetCafeMixin], { types: [schema.InternetCafe] });
