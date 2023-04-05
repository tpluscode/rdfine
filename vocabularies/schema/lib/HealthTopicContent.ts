import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebContentMixin } from './WebContent.js';

export interface HealthTopicContent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebContent<D>, RdfResource<D> {
  hasHealthAspect: Schema.HealthAspectEnumeration | undefined;
}

export function HealthTopicContentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HealthTopicContent> & RdfResourceCore> & Base {
  @namespace(schema)
  class HealthTopicContentClass extends WebContentMixin(Resource) implements Partial<HealthTopicContent> {
    @property()
    hasHealthAspect: Schema.HealthAspectEnumeration | undefined;
  }
  return HealthTopicContentClass
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
