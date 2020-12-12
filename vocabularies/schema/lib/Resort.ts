import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LodgingBusinessMixin } from './LodgingBusiness';

export interface Resort<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, RdfResource<D> {
}

export function ResortMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Resort> & RdfResourceCore> & Base {
  @namespace(schema)
  class ResortClass extends LodgingBusinessMixin(Resource) implements Partial<Resort> {
  }
  return ResortClass
}

class ResortImpl extends ResortMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Resort>) {
    super(arg, init)
    this.types.add(schema.Resort)
  }

  static readonly __mixins: Mixin[] = [ResortMixin, LodgingBusinessMixin];
}
ResortMixin.appliesTo = schema.Resort
ResortMixin.Class = ResortImpl

export const fromPointer = createFactory<Resort>([LodgingBusinessMixin, ResortMixin], { types: [schema.Resort] });
