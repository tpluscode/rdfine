import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface SheetMusic<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function SheetMusicMixin<Base extends Constructor>(Resource: Base): Constructor<SheetMusic> & Base {
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
