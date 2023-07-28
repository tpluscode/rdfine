import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceMixin } from './Place.js';

export interface Landform<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, rdfine.RdfResource<D> {
}

export function LandformMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Landform & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LandformClass extends PlaceMixin(Resource) {
  }
  return LandformClass as any
}

class LandformImpl extends LandformMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Landform>) {
    super(arg, init)
    this.types.add(schema.Landform)
  }

  static readonly __mixins: Mixin[] = [LandformMixin, PlaceMixin];
}
LandformMixin.appliesTo = schema.Landform
LandformMixin.Class = LandformImpl

export const fromPointer = createFactory<Landform>([PlaceMixin, LandformMixin], { types: [schema.Landform] });
