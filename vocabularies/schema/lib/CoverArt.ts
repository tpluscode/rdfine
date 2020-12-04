import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VisualArtworkMixin } from './VisualArtwork';

export interface CoverArt<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.VisualArtwork<D>, RdfResource<D> {
}

export function CoverArtMixin<Base extends Constructor>(Resource: Base): Constructor<CoverArt> & Base {
  @namespace(schema)
  class CoverArtClass extends VisualArtworkMixin(Resource) implements CoverArt {
  }
  return CoverArtClass
}

class CoverArtImpl extends CoverArtMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CoverArt>) {
    super(arg, init)
    this.types.add(schema.CoverArt)
  }

  static readonly __mixins: Mixin[] = [CoverArtMixin, VisualArtworkMixin];
}
CoverArtMixin.appliesTo = schema.CoverArt
CoverArtMixin.Class = CoverArtImpl
