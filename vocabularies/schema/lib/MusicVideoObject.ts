import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MediaObjectMixin } from './MediaObject';

export interface MusicVideoObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaObject<D>, RdfResource<D> {
}

export function MusicVideoObjectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MusicVideoObject> & RdfResourceCore> & Base {
  @namespace(schema)
  class MusicVideoObjectClass extends MediaObjectMixin(Resource) implements Partial<MusicVideoObject> {
  }
  return MusicVideoObjectClass
}

class MusicVideoObjectImpl extends MusicVideoObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicVideoObject>) {
    super(arg, init)
    this.types.add(schema.MusicVideoObject)
  }

  static readonly __mixins: Mixin[] = [MusicVideoObjectMixin, MediaObjectMixin];
}
MusicVideoObjectMixin.appliesTo = schema.MusicVideoObject
MusicVideoObjectMixin.Class = MusicVideoObjectImpl

export const fromPointer = createFactory<MusicVideoObject>([MediaObjectMixin, MusicVideoObjectMixin], { types: [schema.MusicVideoObject] });
