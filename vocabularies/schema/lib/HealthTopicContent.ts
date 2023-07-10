import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebContentMixin } from './WebContent.js';

export interface HealthTopicContent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebContent<D>, rdfine.RdfResource<D> {
  hasHealthAspect: Schema.HealthAspectEnumeration | undefined;
}

export function HealthTopicContentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<HealthTopicContent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HealthTopicContentClass extends WebContentMixin(Resource) {
    @rdfine.property()
    hasHealthAspect: Schema.HealthAspectEnumeration | undefined;
  }
  return HealthTopicContentClass as any
}

class HealthTopicContentImpl extends HealthTopicContentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HealthTopicContent>) {
    super(arg, init)
    this.types.add(schema.HealthTopicContent)
  }

  static readonly __mixins: Mixin[] = [HealthTopicContentMixin, WebContentMixin];
}
HealthTopicContentMixin.appliesTo = schema.HealthTopicContent
HealthTopicContentMixin.Class = HealthTopicContentImpl

export const fromPointer = createFactory<HealthTopicContent>([WebContentMixin, HealthTopicContentMixin], { types: [schema.HealthTopicContent] });
