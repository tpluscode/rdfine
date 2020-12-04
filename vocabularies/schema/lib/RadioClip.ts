import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ClipMixin } from './Clip';

export interface RadioClip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Clip<D>, RdfResource<D> {
}

export function RadioClipMixin<Base extends Constructor>(Resource: Base): Constructor<RadioClip> & Base {
  @namespace(schema)
  class RadioClipClass extends ClipMixin(Resource) implements RadioClip {
  }
  return RadioClipClass
}

class RadioClipImpl extends RadioClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioClip>) {
    super(arg, init)
    this.types.add(schema.RadioClip)
  }

  static readonly __mixins: Mixin[] = [RadioClipMixin, ClipMixin];
}
RadioClipMixin.appliesTo = schema.RadioClip
RadioClipMixin.Class = RadioClipImpl
