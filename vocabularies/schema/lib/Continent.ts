import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LandformMixin } from './Landform.js';

export interface Continent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Landform<D>, rdfine.RdfResource<D> {
}

export function ContinentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Continent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ContinentClass extends LandformMixin(Resource) {
  }
  return ContinentClass as any
}

class ContinentImpl extends ContinentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Continent>) {
    super(arg, init)
    this.types.add(schema.Continent)
  }

  static readonly __mixins: Mixin[] = [ContinentMixin, LandformMixin];
}
ContinentMixin.appliesTo = schema.Continent
ContinentMixin.Class = ContinentImpl

export const fromPointer = createFactory<Continent>([LandformMixin, ContinentMixin], { types: [schema.Continent] });
