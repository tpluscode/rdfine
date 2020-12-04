import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface ShortStory<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function ShortStoryMixin<Base extends Constructor>(Resource: Base): Constructor<ShortStory> & Base {
  @namespace(schema)
  class ShortStoryClass extends CreativeWorkMixin(Resource) implements ShortStory {
  }
  return ShortStoryClass
}

class ShortStoryImpl extends ShortStoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShortStory>) {
    super(arg, init)
    this.types.add(schema.ShortStory)
  }

  static readonly __mixins: Mixin[] = [ShortStoryMixin, CreativeWorkMixin];
}
ShortStoryMixin.appliesTo = schema.ShortStory
ShortStoryMixin.Class = ShortStoryImpl
