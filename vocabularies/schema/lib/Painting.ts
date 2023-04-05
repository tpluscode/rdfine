import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Painting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function PaintingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Painting> & RdfResourceCore> & Base {
  @namespace(schema)
  class PaintingClass extends CreativeWorkMixin(Resource) implements Partial<Painting> {
  }
  return PaintingClass
}

class PaintingImpl extends PaintingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Painting>) {
    super(arg, init)
    this.types.add(schema.Painting)
  }

  static readonly __mixins: Mixin[] = [PaintingMixin, CreativeWorkMixin];
}
PaintingMixin.appliesTo = schema.Painting
PaintingMixin.Class = PaintingImpl

export const fromPointer = createFactory<Painting>([CreativeWorkMixin, PaintingMixin], { types: [schema.Painting] });
