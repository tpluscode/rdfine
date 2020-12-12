import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';
import type * as Wgs from '@rdfine/wgs';
import { SpatialThingMixin as WgsSpatialThingMixin } from '@rdfine/wgs/lib/SpatialThing';
import { AgentMixin } from './Agent';

export interface Person<D extends RDF.DatasetCore = RDF.DatasetCore> extends Wgs.SpatialThing<D>, Foaf.Agent<D>, RdfResource<D> {
  currentProject: RDF.NamedNode | undefined;
  'family_name': RDF.Literal | undefined;
  familyName: RDF.Literal | undefined;
  firstName: RDF.Literal | undefined;
  geekcode: RDF.Literal | undefined;
  img: Foaf.Image<D> | undefined;
  knows: Foaf.Person<D> | undefined;
  lastName: RDF.Literal | undefined;
  myersBriggs: RDF.Literal | undefined;
  pastProject: RDF.NamedNode | undefined;
  plan: RDF.Literal | undefined;
  publications: Foaf.Document<D> | undefined;
  schoolHomepage: Foaf.Document<D> | undefined;
  surname: RDF.Literal | undefined;
  workInfoHomepage: Foaf.Document<D> | undefined;
  workplaceHomepage: Foaf.Document<D> | undefined;
}

export function PersonMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Person> & RdfResourceCore> & Base {
  @namespace(foaf)
  class PersonClass extends AgentMixin(WgsSpatialThingMixin(Resource)) implements Partial<Person> {
    @property()
    currentProject: RDF.NamedNode | undefined;
    @property()
    'family_name': RDF.Literal | undefined;
    @property()
    familyName: RDF.Literal | undefined;
    @property()
    firstName: RDF.Literal | undefined;
    @property()
    geekcode: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [foaf.Image] })
    img: Foaf.Image | undefined;
    @property.resource({ as: [PersonMixin] })
    knows: Foaf.Person | undefined;
    @property()
    lastName: RDF.Literal | undefined;
    @property()
    myersBriggs: RDF.Literal | undefined;
    @property()
    pastProject: RDF.NamedNode | undefined;
    @property()
    plan: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
    publications: Foaf.Document | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
    schoolHomepage: Foaf.Document | undefined;
    @property()
    surname: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
    workInfoHomepage: Foaf.Document | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
    workplaceHomepage: Foaf.Document | undefined;
  }
  return PersonClass
}

class PersonImpl extends PersonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Person>) {
    super(arg, init)
    this.types.add(foaf.Person)
  }

  static readonly __mixins: Mixin[] = [PersonMixin, WgsSpatialThingMixin, AgentMixin];
}
PersonMixin.appliesTo = foaf.Person
PersonMixin.Class = PersonImpl
