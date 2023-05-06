import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface SheetMusic<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function SheetMusicMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SheetMusic> & RdfResourceCore> & Base {
  @namespace(schema)
  class SheetMusicClass extends CreativeWorkMixin(Resource) implements Partial<SheetMusic> {
  }
  return SheetMusicClass
}

class SheetMusicImpl extends SheetMusicMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SheetMusic>) {
    super(arg, init)
    this.types.add(schema.SheetMusic)
  }

  static readonly __mixins: Mixin[] = [SheetMusicMixin, CreativeWorkMixin];
}
SheetMusicMixin.appliesTo = schema.SheetMusic
SheetMusicMixin.Class = SheetMusicImpl

export const fromPointer = createFactory<SheetMusic>([CreativeWorkMixin, SheetMusicMixin], { types: [schema.SheetMusic] });
