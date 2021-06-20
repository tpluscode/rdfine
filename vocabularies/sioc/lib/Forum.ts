import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';
import { ContainerMixin } from './Container';

export interface Forum<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sioc.Container<D>, RdfResource<D> {
  'has_moderator': Sioc.UserAccount<D> | undefined;
  'num_threads': number | undefined;
}

export function ForumMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Forum> & RdfResourceCore> & Base {
  @namespace(sioc)
  class ForumClass extends ContainerMixin(Resource) implements Partial<Forum> {
    @property.resource({ implicitTypes: [sioc.UserAccount] })
    'has_moderator': Sioc.UserAccount | undefined;
    @property.literal({ type: Number })
    'num_threads': number | undefined;
  }
  return ForumClass
}

class ForumImpl extends ForumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Forum>) {
    super(arg, init)
    this.types.add(sioc.Forum)
  }

  static readonly __mixins: Mixin[] = [ForumMixin, ContainerMixin];
}
ForumMixin.appliesTo = sioc.Forum
ForumMixin.Class = ForumImpl

export const fromPointer = createFactory<Forum>([ContainerMixin, ForumMixin], { types: [sioc.Forum] });
