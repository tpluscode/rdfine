import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { LinkMixin } from './Link';

export interface Mention<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Link<D>, RdfResource<D> {
}

export function MentionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Mention> & RdfResourceCore> & Base {
  @namespace(as)
  class MentionClass extends LinkMixin(Resource) implements Partial<Mention> {
  }
  return MentionClass
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
