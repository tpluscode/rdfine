import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface SportsClub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function SportsClubMixin<Base extends Constructor>(Resource: Base): Constructor<SportsClub> & Base {
  @namespace(schema)
  class SportsClubClass extends SportsActivityLocationMixin(Resource) implements Partial<SportsClub> {
  }
  return SportsClubClass
}

class SportsClubImpl extends SportsClubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SportsClub>) {
    super(arg, init)
    this.types.add(schema.SportsClub)
  }

  static readonly __mixins: Mixin[] = [SportsClubMixin, SportsActivityLocationMixin];
}
SportsClubMixin.appliesTo = schema.SportsClub
SportsClubMixin.Class = SportsClubImpl
