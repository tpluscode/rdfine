import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface CDCPMDRecord<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  cvdCollectionDate: Date | string | undefined;
  cvdFacilityCounty: string | undefined;
  cvdFacilityId: string | undefined;
  cvdNumBeds: number | undefined;
  cvdNumBedsOcc: number | undefined;
  'cvdNumC19Died': number | undefined;
  'cvdNumC19HOPats': number | undefined;
  'cvdNumC19HospPats': number | undefined;
  'cvdNumC19MechVentPats': number | undefined;
  'cvdNumC19OFMechVentPats': number | undefined;
  'cvdNumC19OverflowPats': number | undefined;
  cvdNumICUBeds: number | undefined;
  cvdNumICUBedsOcc: number | undefined;
  cvdNumTotBeds: number | undefined;
  cvdNumVent: number | undefined;
  cvdNumVentUse: number | undefined;
  datePosted: Date | undefined;
}

export function CDCPMDRecordMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CDCPMDRecordClass extends StructuredValueMixin(Resource) implements CDCPMDRecord {
    @property.literal()
    cvdCollectionDate: Date | string | undefined;
    @property.literal()
    cvdFacilityCounty: string | undefined;
    @property.literal()
    cvdFacilityId: string | undefined;
    @property.literal({ type: Number })
    cvdNumBeds: number | undefined;
    @property.literal({ type: Number })
    cvdNumBedsOcc: number | undefined;
    @property.literal({ type: Number })
    'cvdNumC19Died': number | undefined;
    @property.literal({ type: Number })
    'cvdNumC19HOPats': number | undefined;
    @property.literal({ type: Number })
    'cvdNumC19HospPats': number | undefined;
    @property.literal({ type: Number })
    'cvdNumC19MechVentPats': number | undefined;
    @property.literal({ type: Number })
    'cvdNumC19OFMechVentPats': number | undefined;
    @property.literal({ type: Number })
    'cvdNumC19OverflowPats': number | undefined;
    @property.literal({ type: Number })
    cvdNumICUBeds: number | undefined;
    @property.literal({ type: Number })
    cvdNumICUBedsOcc: number | undefined;
    @property.literal({ type: Number })
    cvdNumTotBeds: number | undefined;
    @property.literal({ type: Number })
    cvdNumVent: number | undefined;
    @property.literal({ type: Number })
    cvdNumVentUse: number | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    datePosted: Date | undefined;
  }
  return CDCPMDRecordClass
}

class CDCPMDRecordImpl extends CDCPMDRecordMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CDCPMDRecord>) {
    super(arg, init)
    this.types.add(schema.CDCPMDRecord)
  }

  static readonly __mixins: Mixin[] = [CDCPMDRecordMixin, StructuredValueMixin];
}
CDCPMDRecordMixin.appliesTo = schema.CDCPMDRecord
CDCPMDRecordMixin.Class = CDCPMDRecordImpl
