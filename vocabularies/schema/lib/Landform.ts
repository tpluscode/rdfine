import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceMixin } from './Place.js';

export interface Landform<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
}

export function LandformMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Landform> & RdfResourceCore> & Base {
  @namespace(schema)
  class LandformClass extends PlaceMixin(Resource) implements Partial<Landform> {
  }
  return LandformClass
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
