import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface SpecialAnnouncement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  announcementLocation: Schema.CivicStructure<D> | Schema.LocalBusiness<D> | undefined;
  category: Schema.Thing<D> | undefined;
  categoryLiteral: string | undefined;
  datePosted: Date | undefined;
  diseasePreventionInfo: Schema.WebContent<D> | undefined;
  diseaseSpreadStatistics: Schema.Dataset<D> | Schema.Observation<D> | Schema.WebContent<D> | undefined;
  gettingTestedInfo: Schema.WebContent<D> | undefined;
  governmentBenefitsInfo: Schema.GovernmentService<D> | undefined;
  newsUpdatesAndGuidelines: Schema.WebContent<D> | undefined;
  publicTransportClosuresInfo: Schema.WebContent<D> | undefined;
  quarantineGuidelines: Schema.WebContent<D> | undefined;
  schoolClosuresInfo: Schema.WebContent<D> | undefined;
  travelBans: Schema.WebContent<D> | undefined;
  webFeed: Schema.DataFeed<D> | undefined;
}

export function SpecialAnnouncementMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SpecialAnnouncement> & RdfResourceCore> & Base {
  @namespace(schema)
  class SpecialAnnouncementClass extends CreativeWorkMixin(Resource) implements Partial<SpecialAnnouncement> {
    @property.resource()
    announcementLocation: Schema.CivicStructure | Schema.LocalBusiness | undefined;
    @property.resource()
    category: Schema.Thing | undefined;
    @property.literal({ path: schema.category })
    categoryLiteral: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    datePosted: Date | undefined;
    @property.resource()
    diseasePreventionInfo: Schema.WebContent | undefined;
    @property.resource()
    diseaseSpreadStatistics: Schema.Dataset | Schema.Observation | Schema.WebContent | undefined;
    @property.resource()
    gettingTestedInfo: Schema.WebContent | undefined;
    @property.resource()
    governmentBenefitsInfo: Schema.GovernmentService | undefined;
    @property.resource()
    newsUpdatesAndGuidelines: Schema.WebContent | undefined;
    @property.resource()
    publicTransportClosuresInfo: Schema.WebContent | undefined;
    @property.resource()
    quarantineGuidelines: Schema.WebContent | undefined;
    @property.resource()
    schoolClosuresInfo: Schema.WebContent | undefined;
    @property.resource()
    travelBans: Schema.WebContent | undefined;
    @property.resource()
    webFeed: Schema.DataFeed | undefined;
  }
  return SpecialAnnouncementClass
}

class SpecialAnnouncementImpl extends SpecialAnnouncementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SpecialAnnouncement>) {
    super(arg, init)
    this.types.add(schema.SpecialAnnouncement)
  }

  static readonly __mixins: Mixin[] = [SpecialAnnouncementMixin, CreativeWorkMixin];
}
SpecialAnnouncementMixin.appliesTo = schema.SpecialAnnouncement
SpecialAnnouncementMixin.Class = SpecialAnnouncementImpl

export const fromPointer = createFactory<SpecialAnnouncement>([CreativeWorkMixin, SpecialAnnouncementMixin], { types: [schema.SpecialAnnouncement] });
