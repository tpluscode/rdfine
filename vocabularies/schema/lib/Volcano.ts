import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LandformMixin } from './Landform.js';

export interface Volcano<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Landform<D>, rdfine.RdfResource<D> {
}

export function VolcanoMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Volcano> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VolcanoClass extends LandformMixin(Resource) implements Partial<Volcano> {
  }
  return VolcanoClass
}

class VolcanoImpl extends VolcanoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Volcano>) {
    super(arg, init)
    this.types.add(schema.Volcano)
  }

  static readonly __mixins: Mixin[] = [VolcanoMixin, LandformMixin];
}
VolcanoMixin.appliesTo = schema.Volcano
VolcanoMixin.Class = VolcanoImpl

export const fromPointer = createFactory<Volcano>([LandformMixin, VolcanoMixin], { types: [schema.Volcano] });
