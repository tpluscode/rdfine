import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface SpecialAnnouncement<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  announcementLocation: Schema.CivicStructure<SiblingNode<ID>> | Schema.LocalBusiness<SiblingNode<ID>> | undefined;
  category: Schema.Thing<SiblingNode<ID>> | undefined;
  categoryLiteral: string | undefined;
  datePosted: Date | undefined;
  diseasePreventionInfo: Schema.WebContent<SiblingNode<ID>> | undefined;
  diseaseSpreadStatistics: Schema.Dataset<SiblingNode<ID>> | Schema.Observation<SiblingNode<ID>> | Schema.WebContent<SiblingNode<ID>> | undefined;
  gettingTestedInfo: Schema.WebContent<SiblingNode<ID>> | undefined;
  governmentBenefitsInfo: Schema.GovernmentService<SiblingNode<ID>> | undefined;
  newsUpdatesAndGuidelines: Schema.WebContent<SiblingNode<ID>> | undefined;
  publicTransportClosuresInfo: Schema.WebContent<SiblingNode<ID>> | undefined;
  quarantineGuidelines: Schema.WebContent<SiblingNode<ID>> | undefined;
  schoolClosuresInfo: Schema.WebContent<SiblingNode<ID>> | undefined;
  travelBans: Schema.WebContent<SiblingNode<ID>> | undefined;
  webFeed: Schema.DataFeed<SiblingNode<ID>> | undefined;
}

export function SpecialAnnouncementMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SpecialAnnouncementClass extends CreativeWorkMixin(Resource) implements SpecialAnnouncement {
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
