import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Sculpture extends Schema.CreativeWork, RdfResource {
}

export function SculptureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SculptureClass extends CreativeWorkMixin(Resource) implements Sculpture {
  }
  return SculptureClass
}

class SculptureImpl extends SculptureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Sculpture>) {
    super(arg, init)
    this.types.add(schema.Sculpture)
  }

  static readonly __mixins: Mixin[] = [SculptureMixin, CreativeWorkMixin];
}
SculptureMixin.appliesTo = schema.Sculpture
SculptureMixin.Class = SculptureImpl
