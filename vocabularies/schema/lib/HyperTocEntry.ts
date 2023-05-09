import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface HyperTocEntry<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  associatedMedia: Schema.MediaObject<D> | undefined;
  tocContinuation: Schema.HyperTocEntry<D> | undefined;
  utterances: string | undefined;
}

export function HyperTocEntryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HyperTocEntry> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HyperTocEntryClass extends CreativeWorkMixin(Resource) implements Partial<HyperTocEntry> {
    @rdfine.property.resource()
    associatedMedia: Schema.MediaObject | undefined;
    @rdfine.property.resource()
    tocContinuation: Schema.HyperTocEntry | undefined;
    @rdfine.property.literal()
    utterances: string | undefined;
  }
  return HyperTocEntryClass
}

class HyperTocEntryImpl extends HyperTocEntryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HyperTocEntry>) {
    super(arg, init)
    this.types.add(schema.HyperTocEntry)
  }

  static readonly __mixins: Mixin[] = [HyperTocEntryMixin, CreativeWorkMixin];
}
HyperTocEntryMixin.appliesTo = schema.HyperTocEntry
HyperTocEntryMixin.Class = HyperTocEntryImpl

export const fromPointer = createFactory<HyperTocEntry>([CreativeWorkMixin, HyperTocEntryMixin], { types: [schema.HyperTocEntry] });
