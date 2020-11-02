import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AnatomicalStructureMixin } from './AnatomicalStructure';

export interface Nerve<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, RdfResource<D> {
  branch: Schema.AnatomicalStructure<D> | undefined;
  nerveMotor: Schema.Muscle<D> | undefined;
  sensoryUnit: Schema.AnatomicalStructure<D> | Schema.SuperficialAnatomy<D> | undefined;
  sourcedFrom: Schema.BrainStructure<D> | undefined;
}

export function NerveMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NerveClass extends AnatomicalStructureMixin(Resource) implements Nerve {
    @property.resource()
    branch: Schema.AnatomicalStructure | undefined;
    @property.resource()
    nerveMotor: Schema.Muscle | undefined;
    @property.resource()
    sensoryUnit: Schema.AnatomicalStructure | Schema.SuperficialAnatomy | undefined;
    @property.resource()
    sourcedFrom: Schema.BrainStructure | undefined;
  }
  return NerveClass
}

class NerveImpl extends NerveMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Nerve>) {
    super(arg, init)
    this.types.add(schema.Nerve)
  }

  static readonly __mixins: Mixin[] = [NerveMixin, AnatomicalStructureMixin];
}
NerveMixin.appliesTo = schema.Nerve
NerveMixin.Class = NerveImpl
