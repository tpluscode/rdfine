import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { LinkMixin } from './Link.js';

export interface Mention<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Link<D>, rdfine.RdfResource<D> {
}

export function MentionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Mention & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class MentionClass extends LinkMixin(Resource) {
  }
  return MentionClass as any
}

class MentionImpl extends MentionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Mention>) {
    super(arg, init)
    this.types.add(as.Mention)
  }

  static readonly __mixins: Mixin[] = [MentionMixin, LinkMixin];
}
MentionMixin.appliesTo = as.Mention
MentionMixin.Class = MentionImpl

export const fromPointer = createFactory<Mention>([LinkMixin, MentionMixin], { types: [as.Mention] });
