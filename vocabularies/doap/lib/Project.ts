import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import type * as Foaf from '@rdfine/foaf';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Sioc from '@rdfine/sioc';
import { ProjectMixin as FoafProjectMixin } from '@rdfine/foaf/lib/Project';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { PersonMixin as FoafPersonMixin } from '@rdfine/foaf/lib/Person';
import { ContainerMixin as SiocContainerMixin } from '@rdfine/sioc/lib/Container';
import { OrganizationMixin as FoafOrganizationMixin } from '@rdfine/foaf/lib/Organization';

export interface Project<ID extends ResourceNode = ResourceNode> extends Foaf.Project<ID>, RdfResource<ID> {
  audience: RDF.Literal | undefined;
  blog: Rdfs.Resource<SiblingNode<ID>> | undefined;
  'bug-database': RDF.Term | undefined;
  category: RDF.Term | undefined;
  developer: Foaf.Person<SiblingNode<ID>> | undefined;
  'developer-forum': Sioc.Container<SiblingNode<ID>> | undefined;
  documenter: Foaf.Person<SiblingNode<ID>> | undefined;
  'download-mirror': RDF.Term | undefined;
  'download-page': RDF.Term | undefined;
  helper: Foaf.Person<SiblingNode<ID>> | undefined;
  homepage: RDF.Term | undefined;
  implements: Doap.Specification<SiblingNode<ID>> | undefined;
  language: RDF.Literal | undefined;
  'mailing-list': RDF.NamedNode | undefined;
  maintainer: Foaf.Person<SiblingNode<ID>> | undefined;
  'old-homepage': RDF.Term | undefined;
  os: RDF.Literal | undefined;
  platform: RDF.Literal | undefined;
  'programming-language': RDF.Literal | undefined;
  release: Doap.Version<SiblingNode<ID>> | undefined;
  repository: Doap.Repository<SiblingNode<ID>> | undefined;
  screenshots: RDF.Term | undefined;
  'service-endpoint': Rdfs.Resource<SiblingNode<ID>> | undefined;
  'support-forum': Sioc.Container<SiblingNode<ID>> | undefined;
  tester: Foaf.Person<SiblingNode<ID>> | undefined;
  translator: Foaf.Person<SiblingNode<ID>> | undefined;
  vendor: Foaf.Organization<SiblingNode<ID>> | undefined;
  wiki: RDF.NamedNode | undefined;
}

export function ProjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(doap)
  class ProjectClass extends FoafProjectMixin(Resource) implements Project {
    @property()
    audience: RDF.Literal | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    blog: Rdfs.Resource | undefined;
    @property()
    'bug-database': RDF.Term | undefined;
    @property()
    category: RDF.Term | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    developer: Foaf.Person | undefined;
    @property.resource({ as: [SiocContainerMixin] })
    'developer-forum': Sioc.Container | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    documenter: Foaf.Person | undefined;
    @property()
    'download-mirror': RDF.Term | undefined;
    @property()
    'download-page': RDF.Term | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    helper: Foaf.Person | undefined;
    @property()
    homepage: RDF.Term | undefined;
    @property.resource({ implicitTypes: [doap.Specification] })
    implements: Doap.Specification | undefined;
    @property()
    language: RDF.Literal | undefined;
    @property()
    'mailing-list': RDF.NamedNode | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    maintainer: Foaf.Person | undefined;
    @property()
    'old-homepage': RDF.Term | undefined;
    @property()
    os: RDF.Literal | undefined;
    @property()
    platform: RDF.Literal | undefined;
    @property()
    'programming-language': RDF.Literal | undefined;
    @property.resource({ implicitTypes: [doap.Version] })
    release: Doap.Version | undefined;
    @property.resource({ implicitTypes: [doap.Repository] })
    repository: Doap.Repository | undefined;
    @property()
    screenshots: RDF.Term | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    'service-endpoint': Rdfs.Resource | undefined;
    @property.resource({ as: [SiocContainerMixin] })
    'support-forum': Sioc.Container | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    tester: Foaf.Person | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    translator: Foaf.Person | undefined;
    @property.resource({ as: [FoafOrganizationMixin] })
    vendor: Foaf.Organization | undefined;
    @property()
    wiki: RDF.NamedNode | undefined;
  }
  return ProjectClass
}

class ProjectImpl extends ProjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Project>) {
    super(arg, init)
    this.types.add(doap.Project)
  }

  static readonly __mixins: Mixin[] = [ProjectMixin, FoafProjectMixin];
}
ProjectMixin.appliesTo = doap.Project
ProjectMixin.Class = ProjectImpl
