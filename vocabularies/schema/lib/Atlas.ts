import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Atlas<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function AtlasMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Atlas> & RdfResourceCore> & Base {
  @namespace(schema)
  class AtlasClass extends CreativeWorkMixin(Resource) implements Partial<Atlas> {
  }
  return AtlasClass
}

class AtlasImpl extends AtlasMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Atlas>) {
    super(arg, init)
    this.types.add(schema.Atlas)
  }

  static readonly __mixins: Mixin[] = [AtlasMixin, CreativeWorkMixin];
}
AtlasMixin.appliesTo = schema.Atlas
AtlasMixin.Class = AtlasImpl

export const fromPointer = createFactory<Atlas>([CreativeWorkMixin, AtlasMixin], { types: [schema.Atlas] });
